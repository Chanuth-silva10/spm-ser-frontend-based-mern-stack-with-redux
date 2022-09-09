import { useState,useEffect } from "react"
import axios from "axios"
import './ReportPromo.css'
import Sidebar from "../Admin/Sidebar"
const Reportpromo = () => {
  const [status,setStatus] = useState('')
  const [type,setType] = useState('')
  const [apiData,setData] = useState([])

  useEffect(()=>{
    if(!status && !type){
      axios.get('/promotion').then(getdata=>{
      setData(getdata.data)
    })
    }
    else if(status && !type){
      axios.get(`/promotion/report/bystatus/${status}`).then(getdata=>{
      setData(getdata.data)
      })
    }
    else if(type && !status){
      axios.get(`/promotion/report/bytype/${type}`).then(getdata=>{
      setData(getdata.data)
      })
    }
    else if(status && type){
      axios.get(`/promotion/report/byboth/${status}/${type}`).then(getdata=>{
      setData(getdata.data)
      })
    }
  },[status,type])

  return (
    <div className="dashboard">
      <Sidebar/>

    <div className="dashboardContainer">
    <div className="promotion">
      <form>
      <h2 className="promotopicrep">Choose</h2>
      <div className="choosereport">
      <label className="repstatus">Status</label>
      <select className="reppromoselect" name="status" onChange={e=>{setStatus(e.target.value)}}>
        <option disabled selected value/>
        <option className="repop" value="Active">Active</option>
        <option className="repop" value="Inactive">Inactive</option>
      </select>
      <label className="reptype">Type</label>
      <select className="reppromoselect" name="status" onChange={e=>{setType(e.target.value)}}>
        <option disabled selected value/>
        <option className="repop" value="Advertising">Advertising</option>
        <option className="repop" value="Sales">Sales</option>
        <option className="repop" value="Sponsorship">Sponsorship</option>
        <option className="repop" value="Other">Other</option>
      </select>
      </div>
      </form>
      <div className="reportpromo">
        <h2 className="reportpromotopic">Promotion Report</h2>
        <table className="promotable">
            <thead className="promohead">
            <tr>
            <th>Promotion ID</th>
            <th>Name</th>
            <th>Other Notes</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Condition</th>
            <th>Status</th>
            </tr>
            </thead>
            <tbody className="promotbody">
            {apiData.map((data)=>{
              return(
              <tr>
            <td>{data.ID}</td>
            <td>{data.Name}</td>
            <td>{data.OtherNotes}</td>
            <td>{data.Type}</td>
            <td>{data.Discount}</td>
            <td>{data.Conditions}</td>
            <td>{data.Status}</td>
            </tr>
              )
            })}
            </tbody>  
        </table>
        </div>
        <input type='button' className="generatereport" value='Generate Report'/>
      </div>
      </div>
    </div>
  )
}

export default Reportpromo