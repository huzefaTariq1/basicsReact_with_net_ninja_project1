import React from 'react'
import { useState } from 'react'
import './inputcss.css'
const AddEventForm = ({addEvents,showModalfunction}) => {


 const [title,setTitle]=useState('');
 const [date,setDate]=useState('');


 const AddEvent=(e)=>{
  e.preventDefault()
  const event={
    title:title,
    id:Math.floor(Math.random() * 100)
}
addEvents(event)
console.log(event)
  setTitle("");
  setDate("")
  showModalfunction()
 }

  return (
    <>
    <form onSubmit={AddEvent}>
      <div style={{padding:"10px"}}>
        <div className="form__group field">
          <input value={title} onChange={(e)=>setTitle(e.target.value)} required="" placeholder="Name" className="form__field" type="input" />
          <label className="form__label" for="name">Name</label>
        </div>

        <div className="form__group field">
          <input value={date} onChange={(e)=>{setDate(e.target.value)}} required="" className="form__field" type={"date"} />
          <label className="form__label" for="name">Date</label>
        </div>
      </div>
      <button>Add Event</button>
      </form>
    </>
  )
}

export default AddEventForm
