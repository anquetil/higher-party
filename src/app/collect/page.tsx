const higherGreen = '#018A08'
import Link from 'next/link'
import { animationDelay } from '../animation';
import Image from 'next/image';
import MembershipButton from '@/components/MembershipButton';
import { Web3Provider } from '@/components/Web3Provider';
import PieceList from '@/components/PieceList';


export default function Home() {
  const numArrows = 40

  return (
    <Web3Provider>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-[#018A08] text-white">
        <div className="flex flex-row mb-4">
          <Image src="/pantheon.jpeg" width="200" height="200" alt="pantheon with higher arrow" />
          <div className="text-6xl font-medium z-10 ml-4">
            higher<br/>
            collectors<br/>
            society
          </div>
        </div>
        
        <div className='text-gray-200 z-10'>
          we all mint NFTs with ↑higher every week
        </div>
        <div className='text-gray-200 z-10'>
          proceeds go to the <Link className='underline cursor-pointer opacity-70 hover:opacity-85' href={'https://base.party.app/party/0x8177b34687bc8b99c205e533ae7dd7c6c9d07a66'} target='_blank'>higher collective</Link>
        </div>

        <PieceList />

        <div className='flex flex-col items-center mt-16'>
          <div className="flex flex-row">
            <MembershipButton />
            <Link href='https://www.tally.xyz/gov/higher-collectors-society' className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
              bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
                Propose a New Piece
            </Link>
          </div>
          <div className='z-10 opacity-70 text-sm'>
            must mint 44.44 ↑higher to the collective each week to join
          </div>
        </div>

        <div className='z-10 flex flex-row mt-4 gap-x-2 text-sm'>
          <Link className='underline cursor-pointer opacity-70 hover:opacity-85' target='_blank' href='https://www.tally.xyz/gov/higher-collectors-society/delegates'>
            Member Directory
          </Link>
          <div className='opacity-70'>|</div>
          <Link className='underline cursor-pointer opacity-70 hover:opacity-85' target="_blank" href='https://github.com/niran/larpcoin-toolkit/blob/main/evm/src/PieceCollector.sol'>
            Smart Contract
          </Link>
        </div>

        <div className="arrow-container z-0">
          {
            [...Array(numArrows).keys()].map((i) => (
              <div key={i.toString()} className="arrow text-[#48ad4d]" style={{left: `${i / numArrows * 100}%`, animationDelay: `${animationDelay(i).toFixed(2)}s`}}>
                ↑
              </div>
            ))
          }
        </div>
      </main>
    </Web3Provider>
  );
}
