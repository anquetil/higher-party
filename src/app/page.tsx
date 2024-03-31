
const higherGreen = '#018A08'
import Link from 'next/link'
import { animationDelay } from './animation';


export default function Home() {
  const numArrows = 40

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-[#018A08] text-white">
      <div className="text-6xl font-medium z-10">
        higher.
      </div>
      <div className='text-gray-200 z-10'>
        a community of optimists on Base
      </div>
      <div className="flex flex-row z-10 gap-x-3 my-8">
        <Link className='group cursor-pointer' href={'https://basescan.org/token/0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe'} target='_blank'>
          <svg className='' width="40" height="40" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M25.79 58.4149C25.7901 57.7357 25.9244 57.0633 26.1851 56.4361C26.4458 55.809 26.8278 55.2396 27.3092 54.7605C27.7907 54.2814 28.3619 53.9021 28.9903 53.6444C29.6187 53.3867 30.2918 53.2557 30.971 53.2589L39.561 53.2869C40.9305 53.2869 42.244 53.831 43.2124 54.7994C44.1809 55.7678 44.725 57.0813 44.725 58.4509V90.9309C45.692 90.6439 46.934 90.3379 48.293 90.0179C49.237 89.7962 50.0783 89.262 50.6805 88.5019C51.2826 87.7418 51.6102 86.8006 51.61 85.8309V45.5409C51.61 44.1712 52.154 42.8576 53.1224 41.889C54.0908 40.9204 55.4043 40.3762 56.774 40.3759H65.381C66.7506 40.3762 68.0641 40.9204 69.0325 41.889C70.0009 42.8576 70.545 44.1712 70.545 45.5409V82.9339C70.545 82.9339 72.7 82.0619 74.799 81.1759C75.5787 80.8462 76.2441 80.2941 76.7122 79.5886C77.1803 78.8832 77.4302 78.0555 77.431 77.2089V32.6309C77.431 31.2615 77.9749 29.9481 78.9431 28.9797C79.9113 28.0113 81.2245 27.4672 82.5939 27.4669H91.201C92.5706 27.4669 93.884 28.0109 94.8525 28.9794C95.8209 29.9478 96.365 31.2613 96.365 32.6309V69.3399C103.827 63.9319 111.389 57.4279 117.39 49.6069C118.261 48.4717 118.837 47.1386 119.067 45.7267C119.297 44.3148 119.174 42.8678 118.709 41.5149C115.931 33.5227 111.516 26.1983 105.745 20.0105C99.974 13.8228 92.9749 8.90785 85.1955 5.58032C77.4161 2.2528 69.0277 0.585938 60.5671 0.686416C52.1065 0.786893 43.7601 2.6525 36.062 6.16383C28.3638 9.67517 21.4834 14.7549 15.8611 21.078C10.2388 27.401 5.99842 34.8282 3.41131 42.8842C0.824207 50.9401 -0.0526487 59.4474 0.836851 67.8617C1.72635 76.276 4.36263 84.4119 8.57696 91.7489C9.31111 93.0145 10.3912 94.0444 11.6903 94.7175C12.9894 95.3906 14.4536 95.679 15.911 95.5489C17.539 95.4059 19.566 95.2029 21.976 94.9199C23.0251 94.8008 23.9937 94.2999 24.6972 93.5126C25.4008 92.7253 25.7901 91.7067 25.791 90.6509L25.79 58.4149Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M25.6021 110.51C34.6744 117.11 45.3959 121.072 56.5802 121.957C67.7646 122.841 78.9757 120.615 88.9731 115.523C98.9705 110.431 107.364 102.673 113.226 93.1068C119.087 83.5405 122.188 72.539 122.185 61.3197C122.185 59.9197 122.12 58.5347 122.027 57.1577C99.808 90.2957 58.7831 105.788 25.604 110.505" />
          </svg>
        </Link>

        <Link className='group cursor-pointer' href={'https://warpcast.com/~/channel/higher'} target='_blank'>
          <svg width="40" height="40" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className='fill-white opacity-45 group-hover:opacity-80 ease-in-out'  width="1000" height="1000" rx="200" />
            <path className='fill-[#018A08]' d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"/>
            <path className='fill-[#018A08]' d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"  />
            <path className='fill-[#018A08]' d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"  />
          </svg>
        </Link>

        <Link className='group cursor-pointer' href={'https://twitter.com/higheronly_'} target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </Link>

        <Link className='group cursor-pointer' href={'https://base.party.app/party/0x8177b34687bc8b99c205e533ae7dd7c6c9d07a66'} target='_blank'>
          <svg width="57.88" height="40" viewBox="0 0 1000 691" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M500 0C223.838 0 0 154.65 0 345.392C0 536.133 223.838 690.783 500 690.783C776.162 690.783 1000 536.133 1000 345.392C1000 154.65 776.162 0 500 0ZM500 581.541C279.914 581.541 101.442 461.127 101.442 312.59C101.442 164.053 279.914 43.6799 500 43.6799C720.086 43.6799 898.558 164.095 898.558 312.632C898.558 461.169 720.128 581.584 500 581.584V581.541Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M434.353 367.485L224.175 78.1689L564.255 188.718L434.353 230.88V367.485Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M750.696 372.207L540.518 82.8906L880.639 193.397L750.696 235.602V372.207Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M671.22 594.653L461 305.337L801.121 415.844L671.22 458.048V594.653Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M372.544 593.009L162.366 303.693L502.445 414.2L372.544 456.404V593.009Z" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-row">
        <Link href='/buy' className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
          bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
            Buy
        </Link>
        <Link href='/collect' className='z-10 cursor-pointer rounded px-4 py-2 mx-4 bg-black font-semibold
          bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
            Collect
        </Link>
      </div>

      <div className='z-10 opacity-70 mt-4 text-sm flex flex-col items-center'>
        <div>100% fair launched</div>
        <div>50% to LP, 50% to /higher community members.</div>
      </div>

      <div className='z-10 flex flex-row mt-4 gap-x-2 text-sm'>
        <Link className='underline cursor-pointer opacity-70 hover:opacity-85' target='_blank' href='https://drive.google.com/drive/folders/1FfeTbK3tvOWyInrAjg19CQNE3kpqaDMW?usp=sharing'>
          Media & Assets
        </Link>
        <div className='opacity-70'>|</div>
        <Link className='underline cursor-pointer opacity-70 hover:opacity-85' target="_blank" href='https://www.figma.com/file/mpQm1PzaBPZNCZ0SHS8PnH/higher-template?type=design&node-id=0%3A1&mode=design&t=vBzzx2ArTReZlVFI-1'>
          Meme Template
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
  );
}
