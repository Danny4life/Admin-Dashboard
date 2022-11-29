import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"
import "./list.scss"

const List = () => {
    return ( 
        <div className="list">
             <Sidebar />
          
            <div className="listContainer">
            <NavBar />
                datatable
                
            </div>
        </div>
     );
}
 
export default List;