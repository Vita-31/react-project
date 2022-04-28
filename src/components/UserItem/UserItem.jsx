import './UserItem.css'
import UserBlock from '../UserBlock/UserBlock'
import Button from '../Button/Button'

export default function UserItem({user}) {
    return (
        <div className="userItem">
            <UserBlock title={'Name:'} desc={user.name}/>
            <UserBlock title={'Username:'} desc={user.username}/>
            <UserBlock title={'Email:'} desc={user.email}/>
            <UserBlock title={'Website:'} desc={user.website}/>
            <UserBlock title={'Phone:'} desc={user.phone}/>
            <UserBlock title={'Street:'} desc={user.address.street}/>
            <UserBlock title={'Suite:'} desc={user.address.suite}/>
            <UserBlock title={'City:'} desc={user.address.city}/>
            <UserBlock title={'Zipcode:'} desc={user.address.zipcode}/>
            <div className="userBtns">
                <Button bg={'update'}>Змінити</Button>
                <Button bg={'delete'}>Видалити</Button>
            </div>
        </div>
    )
}