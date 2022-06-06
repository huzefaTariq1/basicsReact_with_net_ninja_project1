import React from 'react'
import DeleteButton from './DeleteButton'
import './eventsCard.css'

const EventsList = ({events,deleteEvent}) => {
    console.log(deleteEvent)
  return (
      <center>
    <div className='card'>
        {events.map((event)=>{
            return(
               <div key={event.id}>
                 <h1>  {event.title} </h1>
                 <DeleteButton  eventid={event.id} deleteEvent={deleteEvent}  ></DeleteButton>
               </div>
            )
        })}
    </div>
    </center>
  )
}

export default EventsList