import './modal.css'

const Modal = (props) => {
    console.log(props.showModalfunction)
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
           {props.children}
         <br></br>
           <button onClick={props.showModalfunction} >Close</button>
        </div>
    </div>
  )
}

export default Modal