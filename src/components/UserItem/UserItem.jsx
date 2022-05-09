import './UserItem.css'
import UserBlock from '../UserBlock/UserBlock'
import Button from '../Button/Button'
import { deleteUser } from '../../api/users'
import useUsers from '../../hooks/useUsers'

export default function UserItem({user}) {
    const {setUsers, setUsersModal} = useUsers();
    function removeUser() {
        const userId = user.id
        deleteUser(userId)
          .then(res => 
            setUsers(users => users.filter(user => userId !== user.id))
          )
          .catch(err => console.log(err))
      }

    function openModal() {
        setUsersModal(true)
    }
    return (
        <>
            <div className="userItem">
                <UserBlock title='Id:' desc={user.id}/>
                <UserBlock title='Name:' desc={user.name}/>
                <UserBlock title='Username:' desc={user.username}/>
                <UserBlock title='Email:' desc={user.email}/>
                <UserBlock title='Website:' desc={user.website}/>
                <UserBlock title='Phone:' desc={user.phone}/>
                <UserBlock title='Street:' desc={user.address?.street}/>
                <UserBlock title='Suite:' desc={user.address?.suite}/>
                <UserBlock title='City:' desc={user.address?.city}/>
                <UserBlock title='Zipcode:' desc={user.address?.zipcode}/>
                <div className="userBtns">
                    <Button bg={'update'} size={'base'} id={user.id} onClick={openModal}>Змінити</Button>
                    <Button bg={'delete'} size={'base'} id={user.id} onClick={removeUser}>Видалити</Button>
                </div>
            </div>
        </>
        
    )
}