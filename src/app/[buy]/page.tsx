import { redirect } from 'next/navigation'


export default async function Swap() {
  redirect('https://swap.defillama.com/?chain=base&from=0x0000000000000000000000000000000000000000&to=0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe')
}