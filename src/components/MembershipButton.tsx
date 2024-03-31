"use client";
import { useModal } from 'connectkit';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Config, UseAccountReturnType, useAccount, useBlockNumber, useReadContracts, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { formatUnits, hexToBigInt } from 'viem';

import PieceCollectorMetadata from "../contracts/PieceCollector.json";
import deployments from "../deployments";


interface PlayerRecord {
  firstTime: bigint,
  activationTime: bigint;
  tokenId: bigint;
  usedValue: bigint;
  expirationTime: bigint;
  isActive: boolean;
}

function ButtonTemplate({ children, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
      bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300' {...props}>
        {children}
    </div>
  );
}

function DelegateButton({ account }: { account: UseAccountReturnType<Config> }) {
  const [isWriting, setIsWriting] = useState(false);
  const { writeContract, data: hash } = useWriteContract();
  const writeResult = useWaitForTransactionReceipt({
    hash: hash,
  });

  useEffect(() => {
    if (isWriting && writeResult.status !== "pending") {
      setIsWriting(false);
    }
  }, [isWriting, writeResult]);

  const writeDelegate = () => {
    setIsWriting(true);
    writeContract({
      address: deployments.pieceCollector,
      abi: PieceCollectorMetadata.abi,
      functionName: "delegate",
      args: [account.address],
    }, {
      onError: () => setIsWriting(false),
    });
  }

  return (
    <ButtonTemplate onClick={writeDelegate}>
      {isWriting && "Joining..."}
      {!isWriting && "Join the Society"}
    </ButtonTemplate>
  );
}

function ExtendMembershipButton({ account }: { account: UseAccountReturnType<Config> }) {
  const [isWriting, setIsWriting] = useState(false);
  const { writeContract, data: hash } = useWriteContract();
  const writeResult = useWaitForTransactionReceipt({
    hash: hash,
  });

  useEffect(() => {
    if (isWriting && writeResult.status !== "pending") {
      setIsWriting(false);
    }
  }, [isWriting, writeResult]);

  const writeUpdatePlayer = () => {
    setIsWriting(true);
    writeContract({
      address: deployments.pieceCollector,
      abi: PieceCollectorMetadata.abi,
      functionName: "updatePlayer",
      args: [account.address],
    }, {
      onError: () => setIsWriting(false),
    });
  }

  return (
    <ButtonTemplate onClick={writeUpdatePlayer}>
      {isWriting && "Extending..."}
      {!isWriting && "Extend Membership"}
    </ButtonTemplate>
  );
}

export default function MembershipButton() {
  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ chainId: 8453, watch: true });
  const account = useAccount();
  const { setOpen } = useModal();

  const result = useReadContracts({
    contracts: [
      {
        address: deployments.pieceCollector as `0x${string}`,
        abi: PieceCollectorMetadata.abi,
        functionName: "getTotalPieceValue",
        args: [account.address],
      },
      {
        address: deployments.pieceCollector as `0x${string}`,
        abi: PieceCollectorMetadata.abi,
        functionName: "cost",
      },
      {
        address: deployments.pieceCollector as `0x${string}`,
        abi: PieceCollectorMetadata.abi,
        functionName: "delegates",
        args: [account.address],
      },
      {
        address: deployments.pieceCollector as `0x${string}`,
        abi: PieceCollectorMetadata.abi,
        functionName: "playerRecords",
        args: [account.address],
      },
    ],
  });

  // Fetch data every polling interval.
  useEffect(() => { 
    queryClient.invalidateQueries({ queryKey: result.queryKey }); 
  }, [blockNumber, queryClient, result.queryKey]);

  let totalValue, cost, delegate;
  let playerRecord: PlayerRecord | undefined;
  if (result.data) {
    totalValue = result.data[0].result as bigint;
    cost = result.data[1].result as bigint;
    delegate = result.data[2].result as `0x${string}`;
    if (result.data[3].result) {
      const [firstTime, activationTime, tokenId, usedValue, expirationTime, isActive] = result.data[3].result as any[];
      playerRecord = {firstTime, activationTime, tokenId, usedValue, expirationTime, isActive};
    }
  }

  if (!account.isConnected || totalValue === undefined || cost === undefined || delegate === undefined) {
    return (
      <ButtonTemplate onClick={() => setOpen(true)}>
        Join the Society
      </ButtonTemplate>
    );
  }

  if (hexToBigInt(delegate) !== BigInt(0)) {
    // The account is already playing.
    if (playerRecord && Date.now() > playerRecord.expirationTime) {
      return <ExtendMembershipButton account={account} />;
    }

    // The account is up to date.
    return;
  }

  if (totalValue > cost) {
    return <DelegateButton account={account} />;
  }

  const totalValueText = parseFloat(formatUnits(totalValue, 18)).toPrecision(4);
  const costText = parseFloat(formatUnits(cost, 18)).toPrecision(4);

  return (
    <ButtonTemplate onClick={() => alert(`You've minted ${totalValueText} higher for the higher collective, but you need ${costText} higher to join. Mint more pieces!`)}>
      Join the Society
    </ButtonTemplate>
  );
}
