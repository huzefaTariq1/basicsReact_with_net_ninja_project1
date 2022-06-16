import React from 'react'
import DeleteButton from './DeleteButton'
import './eventsCard.css'

const EventsList = ({events,deleteEvent}) => {
    console.log(events.legth)
  return (
    
     <center>
    <div className='card'>
  { events.map((event)=>{
            return(
               <div key={event.id}>
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