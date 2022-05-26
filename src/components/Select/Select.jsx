import './Select.css'

function Select({name, ...props}) {

  return (
    <select className='select' name={name} {...props}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
  )
}

export default Select