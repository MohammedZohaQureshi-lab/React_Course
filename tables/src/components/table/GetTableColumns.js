export const tableColumns = (columnArray) => {

    const columnName = Object.keys(columnArray).map(colName => (typeof (columnArray[colName]) !== 'object' && colName));
    const newColumnList = columnName.filter(col => col !== false)
    const useColumns = newColumnList.map(col => ({ Header: col, accessor: col }))


    return useColumns
}
