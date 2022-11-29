import "./sidebar.scss"
import { AccountCircleOutlined, Dashboard, InsertChart, Logout, PsychologyAltOutlined, SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";



const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (  
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo" >
                        SegunAdmin
                    </span>
                </Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                
                    <li>
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                      <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltOutlined className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <Logout className="icon" />
                        <span>Logout</span>
                    </li>    
                </ul>
                
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    );
}
 
export default Sidebar;