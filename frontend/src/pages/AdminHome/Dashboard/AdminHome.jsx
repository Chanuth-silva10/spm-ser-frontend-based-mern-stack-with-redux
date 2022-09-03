import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./adminHome.scss";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>DashBoard</h1>
      </div>
    </div>
  );
};

export default AdminHome;
