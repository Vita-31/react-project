import './Modal.css';
import Input from '../Input/Input'
import Button from '../Button/Button';
import useUsers from '../../hooks/useUsers';
import { updateUser } from '../../api/users';

export default function Modal() {
    const {usersModal, setUsers} = useUsers()

    if(!usersModal) {
        return <></>
    }

    function closeModal() {
       
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
    }
    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="container modal__container">
            <div className="modal__content form">
                <h2 className="modal-title">Змінити дані</h2>
                <form className="modal__form" onSubmit={updateForm}>
                    <div>
                        <Input title={'Enter your name:'} type={'text'} name={'name'} />
                        {/* {nameError && <Error>{nameError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your userame:'} type={'text'} name={'username'} />
                        {/* {usernameError && <Error>{usernameError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your email:'} type={'email'} name={'email'} />
                        {/* {emailError && <Error>{emailError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your website:'} type={'text'} name={'website'} />
                        {/* {websiteError && <Error>{websiteError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your phone:'} type={'tel'} name={'phone'} />
                        {/* {phoneError && <Error>{phoneError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your street:'} type={'text'} name={'street'} />
                        {/* {streetError && <Error>{streetError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your suite:'} type={'text'} name={'suite'} />
                        {/* {suiteError && <Error>{suiteError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your city:'} type={'text'} name={'city'} />
                        {/* {cityError && <Error>{cityError}</Error>} */}
                    </div>
                    <div>
                        <Input title={'Enter your zipcode:'} type={'number'} name={'zipcode'} />
                        {/* {zipcodeError && <Error>{zipcodeError}</Error>} */}
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