
import { useState } from 'react';
import AddEventForm from './components/AddEventForm';
import './App.css';

import EventsList from './components/EventsList';
import Modal from './components/Modal';
import Title from './components/Title';


function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([

  ])


  const addEvents=(event)=>{
   setEvents((preveEvent)=>{
    return [...preveEvent,event]
   })
    console.log("adding")
  }

  const deleteEvent = (id) => {
    const filterArray = events.filter((event) => {
      return event.id !== id
    })
    console.log(filterArray)
    setEvents(filterArray);


  }

  const showEventsToogle = () => {
    setShowEvents(!showEvents)
  }


  const showModalfunction = () => {
    setShowModal(!showModal)
  }


  return (
    <div className="App">

      <Title></Title>
      <div>
        <button onClick={showEventsToogle}>{showEvents === true ? "hide Events" : "Show events"}</button>
      </div>


     { showEvents && <EventsList events={events} deleteEvent={deleteEvent} showModalfunction={showModalfunction}></EventsList> }



      {showModal && <Modal showModalfunction={showModalfunction}>
       <AddEventForm addEvents={addEvents} showModalfunction={showModalfunction}  events={events} ></AddEventForm>
      </Modal>
      }
        
   


      {!showModal && <button onClick={showModalfunction}>Add Events</button>}

    

    </div>
  );
}

export default App;
