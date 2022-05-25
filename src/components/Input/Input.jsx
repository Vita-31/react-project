import './Input.css'

function Input({title, size, type, name, validate, ...props}) {
  const validateClass = validate ? `validate` : '';
  const sizeClass = size ? `higher` : '';
  const classes = [sizeClass].filter(Boolean).join('');
  const validateClasses = [validateClass].filter(Boolean).join('');
  return (
    <input className={`input input-${classes} ${validateClasses}`} placeholder={title} type={type} name={name} {...props}/>
  )
}

export default Input