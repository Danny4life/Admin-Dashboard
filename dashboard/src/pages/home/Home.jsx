import Chart from "../../components/chart/Chart"
import Feature from "../../components/featured/Feature"
import NavBar from "../../components/navbar/NavBar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Feature />
            <Chart />
          </div>
        </div>
    </div>
  )
}

export default Home