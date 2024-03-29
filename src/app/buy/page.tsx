import { redirect } from 'next/navigation'


export default async function Swap() {
  redirect('https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe')
}