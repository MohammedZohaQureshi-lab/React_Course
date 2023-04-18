import React from 'react'
import { useTable, useSortBy } from 'react-table'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import './ReactTable.scss'

const ReactTable = ({ useRows, useColumns }) => {

  const data = React.useMemo(() => useRows, [useRows]);

  const columns = React.useMemo(() => useColumns, [useColumns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
    <table {...getTableProps()} className='table'>
      <thead className='table_header'>
        {headerGroups.map(headerGroup => (
          <tr className='table_header-row' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                // {...column.getHeaderProps()}
                className='table_header-head'
              >
                {column.render('Header')}
                <span className='sortIcon'>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? <ArrowDownwardOutlinedIcon />
                      : <ArrowUpwardOutlinedIcon />
                    : <ArrowDownwardOutlinedIcon />}
                </span>
              </th>

            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr className='table_row' {...row.getRowProps()}>
              {row.cells.map(cell => (<td className='table_row-column'
                {...cell.getCellProps()}>
                {cell.render('Cell')}
              </td>))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ReactTable



