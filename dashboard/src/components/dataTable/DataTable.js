import { DataGrid } from '@mui/x-data-grid';
import './DataTable.scss'

const DataTable = ({ rowData, columnData, pageSize }) => {
    return (
        <div className='datatable'>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowData}
                    columns={columnData}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5]} />
            </div>
        </div>
    )
}

export default DataTable