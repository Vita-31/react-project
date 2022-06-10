import './UserPage.css'
import UserBlock from '../UserBlock/UserBlock'
import Button from '../Button/Button'
import { deleteUser, getUser } from '../../api/users'
import useUsers from '../../hooks/useUsers'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function UserPage() {
    
    const {userId} = useParams()

    const {user, setUser, setUsers, setUsersModal, setUserId} = useUsers();

    function removeUser() {
        deleteUser(userId)
            .then(res => 
                setUsers(users => users.filter(user => userId !== user.id))
            )
            .catch(err => console.log(err))
    } 

    useEffect(()=> {
        getUser(userId)
            .then(res => setUser(res.data))
    }, [userId])

    function openModal() {
        setUsersModal(true)
        setUserId(user.id)
    }

    return (
        <div className='userPage'>
            <div className="userPageItem">
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
            </div>
            <div className="userBtns">
                <Button bg={'update'} size={'base'} id={user.id} onClick={openModal}>Змінити</Button>
                <Button bg={'delete'} size={'base'} id={user.id} onClick={removeUser}>Видалити</Button>
            </div>
        </div>
        
    )
}