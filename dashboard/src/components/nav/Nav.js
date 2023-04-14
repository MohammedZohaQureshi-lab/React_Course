import "./Nav.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";


const Nav = () => {


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="title">
                    Ticketing Status Panel
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <a href="https://teams.microsoft.com/l/call/0/0?users=4:{+917666163641}" rel="noreferrer" target="_blank">
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                        </a>

                        <div className="counter">2</div>
                    </div>

                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="logged in user profile"
                            className="avatar"
                            onClick={() => { alert() }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;