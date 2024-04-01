"use client";
import Link from 'next/link';
import { useClient, useReadContracts } from 'wagmi';
import { formatUnits } from 'viem';

import PieceCollectorMetadata from "../contracts/PieceCollector.json";
import deployments from "../deployments";
import { useEffect, useState } from 'react';
import { multicall } from 'viem/actions';


interface ValuablePiece {
  nft: `0x${string}`;
  erc1155TokenId: bigint;
  value: bigint;
  mintUrl: string;
  forceERC1155: boolean;
}

export default function PieceList() {
  const client = useClient();
  const [pieces, setPieces] = useState<ValuablePiece[]>();
  const idsContracts = [];
  for (let i = 0; i < 10; i++) {
    idsContracts.push({
      address: deployments.pieceCollector,
      abi: PieceCollectorMetadata.abi as any,
      functionName: "pieceIds",
      args: [i],
    });
  }
  const idsResult = useReadContracts({ contracts: idsContracts });

  let pieceIds: bigint[] | undefined;
  if (idsResult.data) {
    pieceIds = idsResult.data.map(x => x.result as bigint);
    pieceIds = pieceIds.filter(x => x !== undefined);
  }

  useEffect(() => {
    async function fetchPieces() {
      if (pieceIds === undefined || client === undefined) return;
      if (pieces !== undefined) return;
      
      const results = await multicall(client, {
        contracts: pieceIds.map(id => {
          return {
            address: deployments.pieceCollector,
            abi: PieceCollectorMetadata.abi as any,
            functionName: "pieces",
            args: [id],
          }
        }),
      });

      const newPieces = [];
      for (let i = 0; i < results.length; i++) {
        if (results[i].result === undefined) return;
        const data = results[i].result as any[];
        newPieces.push({
          nft: data[0],
          erc1155TokenId: data[1],
          value: data[2],
          mintUrl: data[3],
          forceERC1155: data[4],
        });
      }
      setPieces(newPieces);
      if (newPieces.length >= 10) {
        alert("Displaying the first ten pieces. This page needs to be updated to display more than ten pieces.");
      }
    }
    fetchPieces();
  }, [pieceIds, pieces, client]);

  if (pieces === undefined || pieceIds === undefined) {
    return (
      <div>...</div>
    );
  }

  const elements = [];
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    const valueText = parseFloat(formatUnits(piece.value, 18)).toPrecision(4);
    elements.push(
      <div key={i} className='flex flex-col items-center mt-4'>
        <Link href={piece.mintUrl} target='_blank' className='z-10 cursor-pointer rounded px-4 py-2 bg-black font-semibold
          bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
            Mint Piece #{pieceIds[i].toString()}
        </Link>
        <div className='z-10 opacity-70 text-sm text-center'>
          {valueText} ↑higher<br/>
          to the collective
        </div>
      </div>
    );
  }

  return elements;
}
