import React from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import './Table.scss'

const ReactTable = ({ useRows, useColumns, title }) => {

    const data = React.useMemo(() => useRows, [useRows]);
    const columns = React.useMemo(() => useColumns, [useColumns]);

    const {
        getTableProps,
        getTableBodyProps,
        setGlobalFilter,
        headerGroups,
        rows,
        prepareRow,
        state: { globalFilter },
    } = useTable({ columns, data }, useGlobalFilter)
    rows.length = 10;
    React.useEffect(() => {
        // props.dispatch({ type: actions.resetPage })
        // console.log(globalFilter);
    }, [globalFilter]);
    return (
        <div className="tablecontainer">
            <h4 className='tablecontainer-title'>{title}</h4>
            <input style={{ display: 'none', width: "400px", marginBottom: "0.5rem" }}
                type="text"
                value={globalFilter || ""}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder='Type to filter data'
            />
            <table {...getTableProps()} className='table'>
                <thead className='table_header'>
                    {headerGroups.map(headerGroup => (
                        <tr className='table_header-row' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, i) => (
                                <th key={column.Header}
                                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className='table_header-head'
                                >
                                    {column.render('Header')}
                                    {/* <span className='sortIcon'>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <ArrowDownwardOutlinedIcon />
                                                : <ArrowUpwardOutlinedIcon />
                                            : <ArrowDownwardOutlinedIcon />}
                                    </span> */}
                                </th>

                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr className='table_row'  {...row.getRowProps()}>
                                {row.cells.map((cell, i) => {
                                    if (typeof (cell.value) === 'boolean') {
                                        const object = cell.column.Header.toLowerCase();
                                        const newValue = cell.row.original[object].toLocaleString();
                                        cell.row.original[object] = newValue;
                                    }
                                    return <td className='table_row-column' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ReactTable