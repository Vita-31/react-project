import './Input.css'

function Input({title, type, name}) {
  return (
    <input className='input' placeholder={title} type={type} name={name}/>
  )
}

export default Input