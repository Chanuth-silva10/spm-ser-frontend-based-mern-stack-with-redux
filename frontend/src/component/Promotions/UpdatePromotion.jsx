
const Updatepromo = () => {
  return (
    <div>
      
        <h2>update</h2>
        <form className="addpromoform">
        <h2 className="addpromotopic">Promotion Details</h2>
        <label className="addpromolabel">ID</label><br/>
        <input type='text' placeholder='ID1234' className="addpromoinput"/><br/>
        <label className="addpromolabel">Name</label><br/>
        <input type='text' placeholder='Name here' className="addpromoinput"/><br/>
        <label className="addpromolabel">Other Notes</label><br/>
        <input type='text' placeholder='Other notes here' className="addpromoinputON"/>
        <h1 className="addpromotopic">Discount Details</h1>
        <label className="addpromolabel">Type</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio"/><label className="typeradio">Advertising</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio"/><label className="typeradio">Sales</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio"/><label className="typeradio">Sponsorship</label><br/>
        <input type='radio' name='type' placeholder='ID1234' className="addpromoinputradio"/><label className="typeradio">Other</label><br/>
        <label className="addpromolabel">Discount</label><br/>
        <input type='text' placeholder='Discount here' className="addpromoinput"/><br/>
        <label className="addpromolabel">Conditions</label><br/>
        <input type='text' placeholder='Conditions here' className="addpromoinputC"/>
        </form>
        <input type='button' className="updatepromo" value='Update Promotion'/>
      </div>
  )
}

export default Updatepromo