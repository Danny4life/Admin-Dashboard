import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"
import Chart from "../../components/chart/Chart"


const Single = () => {
    return (
        <div className="single">
            <Sidebar />

            <div className="singleContainer">
                <NavBar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2345 6789 00</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Jane Doe st. Garfiend yard, New york.</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (last 6 months)" />
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
      );
}
 
export default Single;
<div>
    Single
</div>