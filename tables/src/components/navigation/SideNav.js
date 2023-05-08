import React from 'react'
import './SideNav.scss'
import Accordion from 'react-bootstrap/Accordion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DvrIcon from '@mui/icons-material/Dvr';

const SideNav = ({ onComponentSelect }) => {
    const clickHandler = (identifier) => {
        onComponentSelect(identifier)
    }

    return (
        <div className='sideNav'>
            {/* <div className='sideNav-header'>
                <h2 className='sideNav-header--title'>Tickets List</h2>
            </div> */}
            <div className='sideNav-content'>
                <Accordion flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between'>
                                <span className="accordion-header--title"><SummarizeIcon />Ticket Summary</span>
                                <div className='relative'>
                                    <span className='icon-down'><KeyboardArrowDownIcon /></span>
                                    <span className='icon-up'><KeyboardArrowUpIcon /></span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className='sideNav-content-list'>
                                <li onClick={() => clickHandler("PendingRequestTable")}><span>VVM +</span></li>
                                <li onClick={() => clickHandler("RequestSummary")}><span>IPDR</span></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between'>
                                <span className="accordion-header--title"><DriveFileRenameOutlineIcon /> Ticket Creation</span>
                                <div className='relative'>
                                    <span className='icon-down'><KeyboardArrowDownIcon /></span>
                                    <span className='icon-up'><KeyboardArrowUpIcon /></span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className='sideNav-content-list'>
                                <li onClick={() => clickHandler("PendingRequestTable")}><span>VVM +</span></li>
                                <li onClick={() => clickHandler("CompletionTrend")}><span>IPDR</span></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between'>
                                <span className="accordion-header--title"><SettingsIcon />Configurations</span>
                                <div className='relative'>
                                    <span className='icon-down'><KeyboardArrowDownIcon /></span>
                                    <span className='icon-up'><KeyboardArrowUpIcon /></span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className='sideNav-content-list'>
                                <li><span>Circle Master</span></li>
                                <li><span>Mail Domains</span></li>
                                <li><span>Access Control</span></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between'>
                                <span className="accordion-header--title"><AssessmentIcon />Reports</span>
                                <div className='relative'>
                                    <span className='icon-down'><KeyboardArrowDownIcon /></span>
                                    <span className='icon-up'><KeyboardArrowUpIcon /></span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className='sideNav-content-list'>
                                <li><span>MIS VVM +</span></li>
                                <li><span>MIS IPDR</span></li>

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            <div className='d-flex justify-content-between'>
                                <span className="accordion-header--title"><DvrIcon />Monitoring</span>
                                <div className='relative'>
                                    <span className='icon-down'><KeyboardArrowDownIcon /></span>
                                    <span className='icon-up'><KeyboardArrowUpIcon /></span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className='sideNav-content-list'>
                                <li><span>Ticket Pendency VVM +</span></li>
                                <li><span>Ticket Pendency IPDR +</span></li>
                                <li><span>Data Monitoring</span></li>
                                <li><span>Queue Utilisation Master</span></li>
                                <li><span>YARN Apps</span></li>
                                <li><span>Cluster Storage</span></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    )
}

export default SideNav
