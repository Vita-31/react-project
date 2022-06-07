import './UserPage.css'
import UserBlock from '../UserBlock/UserBlock'
import Button from '../Button/Button'
import { deleteUser } from '../../api/users'
import useUsers from '../../hooks/useUsers'

export default function UserPage({userItem}) {
    
    const {users, setUsers, setUsersModal, setUserId} = useUsers();

    function removeUser() {
        const userId = userItem.id
        deleteUser(userId)
            .then(res => 
                setUsers(users => users.filter(user => userId !== user.id))
            )
            .catch(err => console.log(err))
        }

    function openModal() {
        setUsersModal(true)
        setUserId(userItem.id)
    }

    return (
        <div className='userPage'>
            <div className="userPageItem">
                <UserBlock title='Id:' desc={userItem.id}/>
                <UserBlock title='Name:' desc={userItem.name}/>
                <UserBlock title='Username:' desc={userItem.username}/>
                <UserBlock title='Email:' desc={userItem.email}/>
                <UserBlock title='Website:' desc={userItem.website}/>
                <UserBlock title='Phone:' desc={userItem.phone}/>
                <UserBlock title='Street:' desc={userItem.address?.street}/>
                <UserBlock title='Suite:' desc={userItem.address?.suite}/>
                <UserBlock title='City:' desc={userItem.address?.city}/>
                <UserBlock title='Zipcode:' desc={userItem.address?.zipcode}/>
            </div>
            <div className="userBtns">
                <Button bg={'update'} size={'base'} id={userItem.id} onClick={openModal}>Змінити</Button>
                <Button bg={'delete'} size={'base'} id={userItem.id} onClick={removeUser}>Видалити</Button>
            </div>
        </div>
        
    )
}