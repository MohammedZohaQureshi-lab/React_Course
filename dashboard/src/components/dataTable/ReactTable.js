import React from 'react'
import { useTable } from 'react-table'

const ReactTable = ({ tableData }) => {
  
  const data = React.useMemo(() => tableData,[tableData]);
  debugger;
  let userColumns=[]
for (const key in tableData) {
  userColumns.push({

  })
}
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Employee Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'User Name',
        accessor: 'username',
      },
      {
        Header: 'Email Id',
        accessor: 'email',
      },
      {
        Header: 'Action',
        accessor: 'status',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ReactTable



