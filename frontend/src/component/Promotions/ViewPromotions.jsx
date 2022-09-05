import {useState,useEffect} from 'react'
import './ViewPromotion.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Promotions = () => {
  const [apiData,setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/promotion').then(getdata=>{
      setData(getdata.data)
    }).then(console.log(apiData))
  },[])

  return (
    <div className='promotion'>
        <h2 className="promotopic">Promotions</h2>
        <Link to='/adminHome/promotions/addpromo'><input type='button' className="addnewpromo" value='Add New Promotion'/></Link>
        <table className="promotable">
          <thead className="promohead">
            <tr>
            <th>Promotion ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody className='promotbody'>
            {apiData.map((data)=>{
            return(
            <tr>
            <td>{data.ID}</td>
            <td>{data.Name}</td>
            <td>{data.Type}</td>
            <td>{data.Discount}</td>
            <td>{data.Conditions}</td>
            <td>{data.Status}</td>
            <td>h7</td>
            </tr>
            )})}
            </tbody>  
        </table>
        <Link to='/adminHome/promotions/genreport'><input type='button' className="generatereport" value='Generate Report'/></Link>
      </div>
  )
}

export default Promotions