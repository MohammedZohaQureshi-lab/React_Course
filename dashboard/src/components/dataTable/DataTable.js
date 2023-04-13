import { DataGrid } from '@mui/x-data-grid';
import './DataTable.scss'


const DataTable = ({ rowData, columnData, pageSize, viewDetails }) => {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return  (<button className="viewButton" onClick={() => viewDetails(params.row.id)}>View</button>)
            },
        },
    ];
    return (
        <div className='datatable'>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowData}
                    columns={columnData.concat(actionColumn)}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5]} />
            </div>


        </div>
    )
}

export default DataTable