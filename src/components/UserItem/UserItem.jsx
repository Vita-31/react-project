import './UserItem.css'
import UserBlock from '../UserBlock/UserBlock'
import Button from '../Button/Button'

export default function UserItem({user}) {
    return (
        <div className="userItem">
            <UserBlock title={'Id:'} desc={user.id ? user.id : null}/>
            <UserBlock title={'Name:'} desc={user.name ? user.name : null}/>
            <UserBlock title={'Username:'} desc={user.name ? user.username  : null}/>
            <UserBlock title={'Email:'} desc={user.name ? user.email : null}/>
            <UserBlock title={'Website:'} desc={user.name ? user.website : null}/>
            <UserBlock title={'Phone:'} desc={user.name ? user.phone : null}/>
            <UserBlock title={'Street:'} desc={user.name ? user.address.street : null}/>
            <UserBlock title={'Suite:'} desc={user.name ? user.address.suite : null}/>
            <UserBlock title={'City:'} desc={user.name ? user.address.city : null}/>
            <UserBlock title={'Zipcode:'} desc={user.name ? user.address.zipcode : null}/>
            <div className="userBtns">
                <Button bg={'update'} size={'base'}>Змінити</Button>
                <Button bg={'delete'} size={'base'}>Видалити</Button>
            </div>
        </div>
    )
}