import prData from '../../summary.json'
import TableMap from './TableUI';

const RequestSummary = ({dateRange}) => {
    const dataObj = prData;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const columnsName = Object.keys(dataObj).map(item => {
        let t = new Date(item);
        return monthNames[t.getMonth()] + " " + t.getDate() + ', ' + t.getFullYear();
    });
    const cellName = ["CELL ID", "DEST IPV4", "IMEI", "IPV4", "IPV6", "MACID", "MSISDN","DEST PORT", "IMSI"]

    return <TableMap data={dataObj} columns={columnsName.reverse()} cellName={cellName} firstColumnTitle='Parameter' tableTitle="Request Summary" range={dateRange}/>
}

export default RequestSummary