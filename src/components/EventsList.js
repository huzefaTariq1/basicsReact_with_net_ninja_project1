import React from 'react'

const EventsList = ({events,deleteEvent}) => {
    console.log(deleteEvent)
  return (
    <div>
        {events.map((event)=>{
            return(
               <div key={event.id}>
                 <h1>  {event.title} </h1>
                 <button onClick={()=>deleteEvent(event.id)}>Delete</button>
               </div>
            )
        })}
    </div>
  )
}

export default EventsList