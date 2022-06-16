import React from 'react'
import DeleteButton from './DeleteButton'
import './eventsCard.css'

const EventsList = ({events,deleteEvent}) => {
    console.log(events.length)
  return (
    
     <center>
    <div className='card'>
  {  events.length===0? <h1>No Event Added Yet</h1>: events.map((event)=>{
            return(
               <div style={{backgroundColor:"rgba(176, 167, 172, 0.8)",borderRadius:"10px" ,maxWidth:"70%", width:"auto",height:"auto",maxHeight:"130px",marginBottom:"20px"}} key={event.id}>
                <div style={{display:"flex" ,justifyContent:"space-evenly" ,flexWrap:"wrap"}}>
                 <h1> Name:{event.title} </h1>
                 <h2> Date:{event.date}</h2>
                 </div>
                 <DeleteButton  eventid={event.id} deleteEvent={deleteEvent}  ></DeleteButton>
               </div>
            )
        })}
      
    </div>
    </center>


  )
}

export default EventsList