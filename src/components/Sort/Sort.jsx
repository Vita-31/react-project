import useUsers from '../../hooks/useUsers';
import './Sort.css';

function Sort() {

  const {setSortParams} = useUsers();

    function sort(event) {
      const sortValue = event.target.value.split('/');
      const key = sortValue[0];
      const order = sortValue[1];
      setSortParams({key, order}) 
    }

  return (
    <form>
        <select className='select' name='select' onChange={sort}>
            <option >Сортувати по:</option>
            <option value="name/1">Ім'я від Я до А</option>
            <option value="name/-1">Ім'я від А до Я</option>
        </select>
    </form>
  )
}

export default Sort