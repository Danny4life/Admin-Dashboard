import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"


const New = () => {
    return ( 
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <NavBar />
                test
            </div>
        </div>
     );
}
 
export default New;