import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import { toast, ToastContainer } from "react-toastify";

const ReportReview = () => {
  const [rating, setRating] = useState("");
  const [searchID, setSearch] = useState("");
  const [apiData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/review").then((getdata) => {
      setData(getdata.data);
    });
    if (searchID) {
      axios
        .get(`http://localhost:4000/review/search/${searchID}`)
        .then((getdata) => {
          if (getdata.data.length === 0) {
            toast.error(`No review with the ID: ${searchID}`);
          } else {
            setData(getdata.data);
          }
        });
    }
  }, [searchID]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <div className="review">
          <h2 className="promotopicrep">Choose</h2>
          <div className="choosereport">
            <label className="repstatus">Rating</label>
            <select
              className="reppromoselect"
              name="status"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            >
              <option disabled selected value />
              <option className="repop" value="1">
                1
              </option>
              <option className="repop" value="2">
                2
              </option>
              <option className="repop" value="3">
                3
              </option>
              <option className="repop" value="4">
                4
              </option>
              <option className="repop" value="5">
                5
              </option>
            </select>

            <label className="repstatus">Product ID</label>
            <input
              type="text"
              className="searchproductID"
              placeholder="Search by Product ID"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="reportpromo">
            <h2 className="reviewtopic">Review Report</h2>
            <table className="reviewtable">
              <thead className="reviewtablehead">
                <tr>
                  <th>Product ID</th>
                  <th>Rating</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody className="promotbody">
                {apiData.map((data) => {
                  return (
                    <tr>
                      <td>{data.ID}</td>
                      <td>{data.Rating}</td>
                      <td>{data.Review}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <input
            type="button"
            className="generatereport"
            value="Generate Report"
          />
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
        </div>
      </div>
    </div>
  );
};
export default ReportReview;
