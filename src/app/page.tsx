'use client'

import { DataTable } from '@/components/data-table-components/data-table'
import { generateData } from '@/mocks/generateData'

const SEED = 66

const ROWS_AMOUNT = 100

const tableData = generateData(ROWS_AMOUNT, SEED)

export default function Home() {
  return (
    <div
      suppressHydrationWarning
      className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'
    >
      <h1>Home Page</h1>
      <DataTable tableData={tableData} />
    </div>
  )
}
