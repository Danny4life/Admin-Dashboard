import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"
import "./list.scss"
import Datatable from "../../components/datatable/Datatable";

const List = () => {
    return ( 
        <div className="list">
             <Sidebar />
          
            <div className="listContainer">
            <NavBar />
            <Datatable />
                
            </div>
        </div>
     );
}
 
export default List;