import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import "./widget.scss"

const Widget = ({ type }) => {

    let data;

    //TEMPORARY
    const amount = 100;
    const diff = 20;


    switch (type){
        case  "user":
            data = {
                title : "USERS",
                isMoney : false,
                link : "see all your users",
                icon : <PersonOutlineOutlined className="icon" />,

            };
            break;
            case  "order":
                data = {
                    title : "ORDERS",
                    isMoney : false,
                    link : "view all orders",
                    icon : <ShoppingCartOutlined className="icon" />,
    
                };
                break;
                case  "earning":
                    data = {
                        title : "EARNINGS",
                        isMoney : true,
                        link : "view net earnings",
                        icon : <MonetizationOnOutlined className="icon" />,
        
                    };
                    break;
                    case  "balance":
                        data = {
                            title : "BALANCE",
                            isMoney : true,
                            link : "see details",
                            icon : <AccountBalanceWalletOutlined className="icon" />,
            
                        };
                        break;
            default:
                break;

    }
    return (  
        <div className="widget">
            {/* share into two container */}
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff} %
                </div>
                <span className="icon">{data.icon}</span>
            </div>
        </div>
    );
}
 
export default Widget;