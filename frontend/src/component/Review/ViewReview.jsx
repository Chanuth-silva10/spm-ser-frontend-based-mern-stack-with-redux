import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../Admin/Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ViewReview.css";
const ViewReview = () => {
  const [apiData, setData] = useState([]);
  const [id, setID] = useState("");
  const [searchID, setSearch] = useState("");

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <div className="review">
          <h2 className="reviewtopic">Review</h2>
          <input
            type="text"
            className="searchreview"
            placeholder="Search by Review ID"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="searchreviewbutton">
            <SearchIcon />
          </button>
          <table className="reviewtable">
            <thead className="reviewtablehead">
              <tr>
                <th>Product ID</th>
                <th>Rating</th>
                <th>Review</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody className="reviewtablebody">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <DeleteIcon className="deleteicon" />
                </td>
              </tr>
            </tbody>
          </table>
          <ToastContainer
            position="bottom-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <input
            type="button"
            className="generatereport"
            value="Generate Report"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewReview;
