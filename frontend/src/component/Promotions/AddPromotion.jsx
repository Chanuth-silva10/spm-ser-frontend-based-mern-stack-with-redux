import { useState } from 'react'
import './AddPromotion.css'
import axios from 'axios'

const Addpromo = () => {
  const [promoid,setID] = useState('')
  const [name,setName] = useState('')
  const [othernotes,setON] = useState('')
  const [type,setType] = useState('')
  const [discount,setDis] = useState('')
  const [conditions,setCon] = useState('')

  const submit = async(e) =>{
    e.preventDefault()
    console.log(promoid,name,othernotes,type,discount,conditions)
    await axios.post('http://localhost:4000/promotion',{promoid,name,othernotes,type,discount,conditions})
    .then(alert('Success'))
    .then(window.location.assign('/adminHome/promotions'))
  }
  return (
    <div className='promotion'>
        <form className="addpromoform">
        <h1 className="addpromotopic">Promotion Details</h1>
        <label className="addpromolabel">ID</label><br/>
        <input type='text' placeholder='ID1234' className="addpromoinput" onChange={e=>{setID(e.target.value)}}/><br/>
        <label className="addpromolabel">Name</label><br/>
        <input type='text' placeholder='Name here' className="addpromoinput" onChange={e=>{setName(e.target.value)}}/><br/>
        <label className="addpromolabel">Other Notes</label><br/>
        <input type='text' placeholder='Other notes here' className="addpromoinputON" onChange={e=>{setON(e.target.value)}}/>
        <h1 className="addpromotopic">Discount Details</h1>
        <label className="addpromolabel">Type</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio" onChange={e=>{setType('Advertising')}}/><label className="typeradio">Advertising</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio" onChange={e=>{setType('Sales')}}/><label className="typeradio">Sales</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio" onChange={e=>{setType('Sponsorship')}}/><label className="typeradio">Sponsorship</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio" onChange={e=>{setType('Other')}}/><label className="typeradio">Other</label><br/>
        <label className="addpromolabel">Discount</label><br/>
        <input type='text' placeholder='Discount here' className="addpromoinput" onChange={e=>{setDis(e.target.value)}}/><br/>
        <label className="addpromolabel">Conditions</label><br/>
        <input type='text' placeholder='Conditions here' className="addpromoinputC" onChange={e=>{setCon(e.target.value)}}/>
        <input type='button' className="submitnewpromo" value='Submit New Promotion' onClick={submit}/>
        </form>
        
    </div>
  )
}

export default Addpromo