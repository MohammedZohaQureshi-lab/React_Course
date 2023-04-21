import React from 'react'
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter } from 'react-table'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLefttIcon from '@mui/icons-material/ArrowLeft';
import './ReactTable.scss'
import { useDispatch } from 'react-redux';
import { usersActions } from '../../store/slice-usersReducer';

const ReactTable = ({ useRows, useColumns, currentPageSize, currentPageIndex }) => {

  const data = React.useMemo(() => useRows, [useRows]);
  const columns = React.useMemo(() => useColumns, [useColumns]);
  const dispatch = useDispatch();

  const {
    getTableProps, getTableBodyProps, headerGroups, page,
    prepareRow, canPreviousPage, canNextPage, pageOptions, nextPage,
    previousPage, setPageSize, state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: { pageIndex: currentPageIndex, pageSize: currentPageSize }, }, useFilters, useGlobalFilter, useSortBy, usePagination,)

  return (
    <div className='tablecontainer'>
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
                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
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
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr className='table_row'  {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className='table_row-column' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <div className='left'>
          <div className='buttonGroup'>
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <ArrowLefttIcon /><ArrowLefttIcon />
            </button>{' '} */}
            {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <ArrowLefttIcon />
            </button>{' '} */}
          </div>
          <div className='selectGroup'>
            <label htmlFor='selectPage'>
              Rows Per Page:
            </label>
            <select id='selectPage'
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
                dispatch(usersActions.updatePageDetails({ currentPageIndex: 0, currentPageSize: Number(e.target.value) }))
              }}
            >
              {[2, 4, 6, 10].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='center'>
          <span className='text'>
            {pageIndex + 1}- {pageOptions.length} of {pageOptions.length}
            {' '}
          </span>
        </div>
        <div className='right'>
          {/* <span>
            Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '} */}
          <div className='buttonGroup'>
            <button onClick={() => {
              previousPage();
              dispatch(usersActions.updatePageDetails({ currentPageIndex: pageIndex - 1, currentPageSize: pageSize }))
            }} disabled={!canPreviousPage}>
              <ArrowLefttIcon className='lefttIcon' />
            </button>{' '}
            <button onClick={() => {
              nextPage();
              dispatch(usersActions.updatePageDetails({ currentPageIndex: pageIndex + 1, currentPageSize: pageSize }))
            }} disabled={!canNextPage}>
              <ArrowRightIcon className='rightIcon' />
            </button>{' '}
          </div>

          {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <ArrowRightIcon /> <ArrowRightIcon />
          </button>{' '} */}
        </div>
      </div>
    </div>
  )
}

export default ReactTable



