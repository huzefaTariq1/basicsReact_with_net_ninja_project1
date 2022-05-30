
import { useState } from 'react';
import './App.css';

function App() {

  const [showEvents,setShowEvents]=useState(true)

  const [events,setEvents]=useState([
    {title:"Eid Ul Adha",id:0},
    {title:"tour to pakistan",id:1},
    {title:"going to czn marrigae",id:2}
  ])


const deleteEvent=(id)=>{
   const filterArray=events.filter((event)=>{
     return event.id!==id
   })
   console.log(filterArray)
   setEvents(filterArray);


}

const showEventsToogle=()=>{
  setShowEvents(!showEvents)
}
  

  return (
    <div className="App">
      
    
    <div>
      <button onClick={()=>showEventsToogle()}>{showEvents===true?"hide Events":"Show events"}</button>
    </div>

      { showEvents && events.map((event)=>{
        return(
          <div key={event.id}>
          <div>{event.title}</div>
          <button onClick={()=>deleteEvent(event.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
