import './Table.scss'
const TableMap = ({ data, columns, cellName, firstColumnTitle, range = 11 }) => {
    columns.reverse().length = range;
    return (
        <div className="tablecontainer">
            {/* <h4 className='tablecontainer-title'>{tableTitle}</h4> */}
            <table className="table">
                <thead className='table_header'>
                    <tr className='table_header-row' >
                        <th className='table_header-head'>{firstColumnTitle}</th>
                        {columns.map(item => <th className='table_header-head' key={item} scope="col">{item}</th>)}
                    </tr>
                </thead>
                <tbody>

                    {cellName.map((cell, i) => <tr className='table_row' key={cell + i}>
                        <td className='table_row-column'>{cell}</td>
                        {Object.keys(data).map((item, j) => {
                            if (j < range && item === "Grand Total") return data[item][cell] !== undefined ? <td className='table_row-column column-highlight' key={data[item][cell] + Math.random()}>{data[item][cell]}</td> : <td className='table_row-column column-highlight' key={Math.random() + i + j + cell}></td>
                            if (j < range) return data[item][cell] !== undefined ? <td className='table_row-column' key={data[item][cell] + Math.random()}>{data[item][cell]}</td> : <td className='table_row-column' key={Math.random() + i + j + cell}></td>;
                            else return false
                        })}
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default TableMap