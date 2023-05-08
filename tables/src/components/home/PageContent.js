import { useState } from 'react';
import PendingRequestTable from '../table/PendingRequestTable';
import RequestSummary from '../table/RequestSummary';
import CompletionTrend from '../table/CompletionTrend';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import DateSelector from '../datepicker/DateRangePicker';
import FilterDropDown from '../filters/FilterDropDown';

const PageContent = () => {
    const [tabItem, setTabItem] = useState('ek_key1');
    const [dateFilter, setDateFilter] = useState({ range: 15, value: null });


    //Functions
    const tabhandler = (keyId) => setTabItem(keyId);
    const dateFilterHandler = (value, name) => {
        const dateRange = { minDate: value[0], maxDate: value[1] }
        const dateParams = `startDate=${value[0].toISOString().split('T')[0]}&endDate=${value[1].toISOString().split('T')[0]}`
        var timeDifference = value[1].getTime() - value[0].getTime();
        var daysDifference = timeDifference / (1000 * 3600 * 24);
        setDateFilter({ range: daysDifference + 1, value: [dateRange.minDate, dateRange.maxDate] });
        console.log(dateParams.replaceAll("-", ""))
    }
    const resetDateHandler = () => setDateFilter({ range: 15, value: null });
    return (
        <>
            <Row className='p-0 m-0'>
                <Col className='dd-group justify-content-start p-0' md={6}>
                    <FilterDropDown />
                </Col>
                <Col md={6} className='p-0 d-flex justify-content-end'>
                    {tabItem !== 'ek_key1' && <DateSelector label='Created On : ' identifier='dateRange' dateValue={dateFilter.value}
                        placeHolder='Last 15 days' onDateUpdate={dateFilterHandler} daysRange={30} resetDate={resetDateHandler} />}
                </Col>
            </Row>
            <Row className='tab-wrapper p-0'>
                <Tabs activeKey={tabItem} onSelect={(k) => tabhandler(k)} className='p-0' >
                    <Tab eventKey='ek_key1' title='Aging for Pending Request'>
                        <PendingRequestTable />
                    </Tab>
                    <Tab eventKey='ek_key2' title='Request Summary'>
                        <RequestSummary dateRange={dateFilter.range} />
                    </Tab>
                    <Tab eventKey='ek_key3' title='Completion Trend'>
                        <CompletionTrend dateRange={dateFilter.range} />
                    </Tab>
                </Tabs>
            </Row>
        </>
    )
}

export default PageContent