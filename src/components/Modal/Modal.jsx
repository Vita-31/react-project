import './Modal.css';
import Input from '../Input/Input'
import Button from '../Button/Button';
import useUsers from '../../hooks/useUsers';
import { updateUser } from '../../api/users';

export default function Modal() {
    const {users, usersModal, userId, setUsersModal, setUsers} = useUsers()

    const userData = users.find(user => user.id === userId)
    
    if(!usersModal) {
        return <></>
    }

    function closeModal() {
        setUsersModal(false)
    }

    function updateForm(event) {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const username = event.target.username.value.trim();
        const email = event.target.email.value.trim();
        const website = event.target.website.value.trim()
        const phone = event.target.phone.value.trim();
        const street = event.target.street.value.trim();
        const suite = event.target.suite.value.trim();
        const city = event.target.city.value.trim();
        const zipcode = event.target.zipcode.value.trim();

        const updateData = {
            name,
            username, 
            email,
            website, 
            phone,
            address: {
                street, 
                suite, 
                city,
                zipcode
            }
        }

        updateUser(userId, updateData)
            .then(res => {
                setUsers(users => {
                    const oldUser = users.findIndex(u => u.id === userId);
                    const newUsers = [...users];
                    newUsers[oldUser] = res.data;
                    return newUsers
                })
            })
            .catch(err => console.log(err))
            
           
        setUsersModal(false)
    }
    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="container modal__container">
            <div className="modal__content form">
                <h2 className="modal-title">Змінити дані</h2>
                <form className="modal__form" onSubmit={updateForm}>
                    <div>
                        <Input title={'Enter your name:'} type={'text'} name={'name'} defaultValue={userData.name}/>
                    </div>
                    <div>
                        <Input title={'Enter your userame:'} type={'text'} name={'username'} defaultValue={userData.username}/>
                    </div>
                    <div>
                        <Input title={'Enter your email:'} type={'email'} name={'email'} defaultValue={userData.email}/>
                    </div>
                    <div>
                        <Input title={'Enter your website:'} type={'text'} name={'website'} defaultValue={userData.website}/>
                    </div>
                    <div>
                        <Input title={'Enter your phone:'} type={'tel'} name={'phone'} defaultValue={userData.phone}/>
                    </div>
                    <div>
                        <Input title={'Enter your street:'} type={'text'} name={'street'} defaultValue={userData?.address.street}/>
                    </div>
                    <div>
                        <Input title={'Enter your suite:'} type={'text'} name={'suite'} defaultValue={userData?.address.suite}/>
                    </div>
                    <div>
                        <Input title={'Enter your city:'} type={'text'} name={'city'} defaultValue={userData?.address.city}/>
                    </div>
                    <div>
                        <Input title={'Enter your zipcode:'} type={'number'} name={'zipcode'} defaultValue={userData?.address.zipcode}/>
                    </div>
                    <div>
                        <Button bg={'update'} size={'base'}>Змінити</Button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}