import './modal.css'

const Modal = (props) => {
    console.log(props.showModalfunction)
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
           {props.children}
         <br></br>
           
        </div>
    </div>
  )
}

export default Modal