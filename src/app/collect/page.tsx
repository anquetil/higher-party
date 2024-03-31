
const higherGreen = '#018A08'
import Link from 'next/link'
import { animationDelay } from '../animation';
import Image from 'next/image';


export default function Home() {
  const numArrows = 40

  return (
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

      <div className='flex flex-col items-center mt-4'>
        <Link href='#' className='z-10 cursor-pointer rounded px-4 py-2 bg-black font-semibold
          bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
            Mint Piece #1
        </Link>
        <div className='z-10 opacity-70 text-sm'>
          52.72 ↑higher to the collective
        </div>
      </div>

      <div className='flex flex-col items-center mt-16'>
        <div className="flex flex-row">
          <Link href='#' className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
            bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
              Join the Society
          </Link>
          <Link href='#' className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
            bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
              Propose a New Piece
          </Link>
        </div>
        <div className='z-10 opacity-70 text-sm'>
          must mint 44.44 ↑higher to the collective each week to join
        </div>
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
  );
}
