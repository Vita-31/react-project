import useUsers from '../../hooks/useUsers';
import './Sort.css';

function Sort({options}) {

  const {setSortParams} = useUsers()

  function sort(event) {
    const optionValue = event.target.value.split('/');
    const [order, key] = optionValue;
    setSortParams({order, key})
  }

  return (
    <>
        <select className='select' name='select' onChange={sort} defaultValue="">
           <option selected value="">Sort:</option>
           {options.map(({value, label}) => {
            return <option key={value} value={value}>{ label }</option>
           })}
        </select>
    </>
  )
}

export default Sort