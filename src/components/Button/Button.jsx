import './Button.css'
import { deleteUser } from '../../api/users'

function Button({bg, size, id, setUsers, children}) {
    const bgClass = bg ? `btn-${bg}` : '';
    const sizeClass = size ? `btn-${size}` : ''
    const classes = [bgClass, sizeClass].filter(Boolean).join(' ')

    function changeUser(event) {
      const userId = event.target.id
      deleteUser(userId)
        .then(res => {
          const users = res.data
          console.log(users)
        })
        .catch(err => console.log(err))
    }
  return (
    <button onClick={changeUser} id={id} className={`btn ${classes}`}>{children}</button>
  )
}

export default Button