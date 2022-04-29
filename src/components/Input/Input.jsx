import './Input.css'

function Input({title, type, name, validate}) {
  const validateClass = validate ? `validate` : '';
  const classes = [validateClass].filter(Boolean).join('');
  return (
    <input className={`input ${classes}`} placeholder={title} type={type} name={name}/>
  )
}

export default Input