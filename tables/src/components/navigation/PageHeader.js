import './PageHeader.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from 'react-bootstrap';
const PageHeader = ({showNav,onMenuClick}) => {
    return (
        <header className='header'>
            <div className='navigation'>
                <h2 className='navigation-title'><Button className={`sideNav-slide-button p-0 m-0 ${showNav ? "" : "showSideNav rotate"}`} onClick={onMenuClick}>
                    <MenuIcon />
                </Button>
                    IPDR Tickets Lifecycle</h2>
            </div>
        </header>
    )
}

export default PageHeader