import { useState } from 'react';
import './Home.scss'
import { Col, Row } from 'react-bootstrap';
import PageHeader from '../navigation/PageHeader';
import SideNav from '../navigation/SideNav';
// import PageContent from './PageContent';
import PendingRequestTable from '../table/PendingRequestTable';
import RequestSummary from '../table/RequestSummary';
import CompletionTrend from '../table/CompletionTrend';


const Home = () => {
    const [showNav, setShowNav] = useState(true);
    const [dateFilter, setDateFilter] = useState({ range: 15, value: null });
    const [visibleComponent, setVisibleComponent] = useState("DefaultPage")
    const toggleHandler = () => {
        setShowNav(prevState => !prevState);
    }
    const componentSelectHandler = (params) => {
        setVisibleComponent(params)
    }
    return (
        <div className='home-wraper'>
            <PageHeader  showNav={showNav} onMenuClick={toggleHandler}/>
            <Row className='page-content w-100 p-0 m-0'>
                
                <Col className={`p-0 m-0 position-relative ${showNav ? "showSideNav" : "hideSideNav"}`} md={2}>
                    <SideNav onComponentSelect={componentSelectHandler} />
                </Col>
                <Col className='p-0 m-0 flex-grow-1 flex-shrink-1' md={10}>
                    <div className='content'>
                        {visibleComponent === "DefaultPage" && <h1>Start Page</h1>}
                        {visibleComponent === "PendingRequestTable" && <PendingRequestTable />}
                        {visibleComponent === "RequestSummary" && <RequestSummary dateRange={dateFilter.range} />}
                        {visibleComponent === "CompletionTrend" && <CompletionTrend dateRange={dateFilter.range} />}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home