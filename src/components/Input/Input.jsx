import './Input.css'

function Input({title, type}) {
  return (
    <input className='input' placeholder={title} type={type} />
  )
}

export default Input