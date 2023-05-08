import React from 'react'
import prData from '../../pending.json'
import TableMap from './TableUI';
const PendingRequestTable = () => {
    const dataObj = prData;
    const columnsName = Object.keys(dataObj);
    //const cellName = Object.keys(prData["Grand Total"])
    const cellName = ["CELL ID", "DEST IPV4", "IMEI", "IPV4", "IPV6", "MACID", "MSISDN","DEST PORT"];

    return <TableMap data={dataObj} columns={columnsName} cellName={cellName} firstColumnTitle='Parameter' tableTitle="Aging for Pending Request" />
}

export default PendingRequestTable