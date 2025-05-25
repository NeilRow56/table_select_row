'use client'

import { DataTable } from '@/components/data-table-components/data-table'
import { generateData } from '@/mocks/generateData'

const SEED = 66

const ROWS_AMOUNT = 333

const tableData = generateData(ROWS_AMOUNT, SEED)

export default function Home() {
  return (
    <div suppressHydrationWarning className='m-8'>
      <DataTable tableData={tableData} />
    </div>
  )
}
