
import { useState } from 'react';
import './App.css';

import EventsList from './components/EventsList';
import Modal from './components/Modal';
import Title from './components/Title';


function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([
    { title: "Eid Ul Adha", id: 0 },
    { title: "tour to pakistan", id: 1 },
    { title: "going to czn marrigae", id: 2 }
  ])


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


     { showEvents &&  <EventsList events={events} deleteEvent={deleteEvent}></EventsList> }



      {showModal && <Modal showModalfunction={showModalfunction}>
        <h1>Terms and condition</h1>
        <p>In consectetur voluptate in et dolore amet pariatur ullamco sint. Esse ea enim dolor fugiat consequat laborum proident ex sunt. Eiusmod enim ea qui proident exercitation mollit magna sunt consequat et ea ut pariatur ad. Eiusmod et ex aliqua dolor laborum et labore. Irure qui Lorem consequat velit sint nisi officia amet. Quis occaecat pariatur non culpa aliqua occaecat id velit non.</p>
      </Modal>
      }
        
   


      {!showModal && <button onClick={showModalfunction}>Show Modal</button>}
    </div>
  );
}

export default App;
