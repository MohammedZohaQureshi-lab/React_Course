import React from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLefttIcon from '@mui/icons-material/ArrowLeft';
import './ReactTable.scss'

const FilterSearchTable = ({ useRows, useColumns, currentPageSize, currentPageIndex }) => {

    const data = React.useMemo(() => useRows, [useRows]);
    const columns = React.useMemo(() => useColumns, [useColumns]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: currentPageIndex, pageSize: currentPageSize }, }, useSortBy, usePagination)

    return (
        <div className='tablecontainer'>
            <table {...getTableProps()} className='table'>
                <thead className='table_header'>
                    {headerGroups.map(headerGroup => (
                        <tr className='table_header-row' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
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
                    </div>
                    <div className='selectGroup'>
                        <label htmlFor='selectPage'>
                            Rows Per Page:
                        </label>
                        <select id='selectPage'
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value));
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
                    <div className='buttonGroup'>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <ArrowLefttIcon className='lefttIcon' />
                        </button>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            <ArrowRightIcon className='rightIcon' />
                        </button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSearchTable



