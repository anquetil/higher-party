
const higherGreen = '#018A08'
import Link from 'next/link'

function animationDelay(i: number){
  const num = i + 2 // avoid 1 and 0
  const delay = generatePerlinNoise(num**2, num**2)[num**2] * 10 //i ** 2 % 4 / 10
  // console.log(i, delay)
  return delay
}


/* PERLIN NOISE */
function generatePerlinNoise(width: number, height: number) {
  let options = {};
  var octaveCount =  4;
  var amplitude =  0.1;
  var persistence =  0.2;
  var whiteNoise = generateWhiteNoise(width, height);

  var smoothNoiseList = new Array(octaveCount);
  var i;
  for (i = 0; i < octaveCount; ++i) {
    smoothNoiseList[i] = generateSmoothNoise(i);
  }
  var perlinNoise = new Array(width * height);
  var totalAmplitude = 0;
  // blend noise together
  for (i = octaveCount - 1; i >= 0; --i) {
    amplitude *= persistence;
    totalAmplitude += amplitude;

    for (var j = 0; j < perlinNoise.length; ++j) {
      perlinNoise[j] = perlinNoise[j] || 0;
      perlinNoise[j] += smoothNoiseList[i][j] * amplitude;
    }
  }
  // normalization
  for (i = 0; i < perlinNoise.length; ++i) {
    perlinNoise[i] /= totalAmplitude;
  }

  return perlinNoise;

  function generateSmoothNoise(octave: number) {
    var noise = new Array(width * height);
    var samplePeriod = Math.pow(2, octave);
    var sampleFrequency = 1 / samplePeriod;
    var noiseIndex = 0;
    for (var y = 0; y < height; ++y) {
      var sampleY0 = Math.floor(y / samplePeriod) * samplePeriod;
      var sampleY1 = (sampleY0 + samplePeriod) % height;
      var vertBlend = (y - sampleY0) * sampleFrequency;
      for (var x = 0; x < width; ++x) {
        var sampleX0 = Math.floor(x / samplePeriod) * samplePeriod;
        var sampleX1 = (sampleX0 + samplePeriod) % width;
        var horizBlend = (x - sampleX0) * sampleFrequency;

        // blend top two corners
        var top = interpolate(whiteNoise[sampleY0 * width + sampleX0], whiteNoise[sampleY1 * width + sampleX0], vertBlend);
        // blend bottom two corners
        var bottom = interpolate(whiteNoise[sampleY0 * width + sampleX1], whiteNoise[sampleY1 * width + sampleX1], vertBlend);
        // final blend
        noise[noiseIndex] = interpolate(top, bottom, horizBlend);
        noiseIndex += 1;
      }
    }
    return noise;
  }
}
function generateWhiteNoise(width: number, height: number) {
  var noise = new Array(width * height);
  for (var i = 0; i < noise.length; ++i) {
    noise[i] = Math.random();
  }
  return noise;
}
function interpolate(x0: number, x1: number, alpha: number) {
  return x0 * (1 - alpha) + alpha * x1;
}
/* PERLIN NOISE */

export default function Home() {
  const numArrows = 40

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-[#018A08] text-white">
      <div className="text-6xl font-medium z-10">
        higher.
      </div>
      <div className='text-gray-200 z-10'>
        a community of optimists
      </div>
      <div className="flex flex-row z-10 gap-x-3 mt-8">
        <Link className='group cursor-pointer' href={'https://basescan.org/token/0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe'} target='_blank'>
          <svg className='' width="40" height="40" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M25.79 58.4149C25.7901 57.7357 25.9244 57.0633 26.1851 56.4361C26.4458 55.809 26.8278 55.2396 27.3092 54.7605C27.7907 54.2814 28.3619 53.9021 28.9903 53.6444C29.6187 53.3867 30.2918 53.2557 30.971 53.2589L39.561 53.2869C40.9305 53.2869 42.244 53.831 43.2124 54.7994C44.1809 55.7678 44.725 57.0813 44.725 58.4509V90.9309C45.692 90.6439 46.934 90.3379 48.293 90.0179C49.237 89.7962 50.0783 89.262 50.6805 88.5019C51.2826 87.7418 51.6102 86.8006 51.61 85.8309V45.5409C51.61 44.1712 52.154 42.8576 53.1224 41.889C54.0908 40.9204 55.4043 40.3762 56.774 40.3759H65.381C66.7506 40.3762 68.0641 40.9204 69.0325 41.889C70.0009 42.8576 70.545 44.1712 70.545 45.5409V82.9339C70.545 82.9339 72.7 82.0619 74.799 81.1759C75.5787 80.8462 76.2441 80.2941 76.7122 79.5886C77.1803 78.8832 77.4302 78.0555 77.431 77.2089V32.6309C77.431 31.2615 77.9749 29.9481 78.9431 28.9797C79.9113 28.0113 81.2245 27.4672 82.5939 27.4669H91.201C92.5706 27.4669 93.884 28.0109 94.8525 28.9794C95.8209 29.9478 96.365 31.2613 96.365 32.6309V69.3399C103.827 63.9319 111.389 57.4279 117.39 49.6069C118.261 48.4717 118.837 47.1386 119.067 45.7267C119.297 44.3148 119.174 42.8678 118.709 41.5149C115.931 33.5227 111.516 26.1983 105.745 20.0105C99.974 13.8228 92.9749 8.90785 85.1955 5.58032C77.4161 2.2528 69.0277 0.585938 60.5671 0.686416C52.1065 0.786893 43.7601 2.6525 36.062 6.16383C28.3638 9.67517 21.4834 14.7549 15.8611 21.078C10.2388 27.401 5.99842 34.8282 3.41131 42.8842C0.824207 50.9401 -0.0526487 59.4474 0.836851 67.8617C1.72635 76.276 4.36263 84.4119 8.57696 91.7489C9.31111 93.0145 10.3912 94.0444 11.6903 94.7175C12.9894 95.3906 14.4536 95.679 15.911 95.5489C17.539 95.4059 19.566 95.2029 21.976 94.9199C23.0251 94.8008 23.9937 94.2999 24.6972 93.5126C25.4008 92.7253 25.7901 91.7067 25.791 90.6509L25.79 58.4149Z" />
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="M25.6021 110.51C34.6744 117.11 45.3959 121.072 56.5802 121.957C67.7646 122.841 78.9757 120.615 88.9731 115.523C98.9705 110.431 107.364 102.673 113.226 93.1068C119.087 83.5405 122.188 72.539 122.185 61.3197C122.185 59.9197 122.12 58.5347 122.027 57.1577C99.808 90.2957 58.7831 105.788 25.604 110.505" />
          </svg>
        </Link>

        <Link className='group cursor-pointer' href={'https://www.dextools.io/app/en/base/pair-explorer/0x87cadde19468283af8d610474ecbd19ed285f698?t=1710403889719'} target='_blank'>
          <svg fill="none" height="40" viewBox="0 -.058 754.779 867.058" width="34.78" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-white opacity-45 group-hover:opacity-80 ease-in-out' d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z" />
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

      </div>

      <Link href='/buy' className='z-10 mt-4 cursor-pointer rounded px-4 py-2 bg-black font-semibold
        bg-opacity-20 hover:bg-opacity-40 ease-in-out transition-all duration-300'>
          Buy
      </Link>


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
