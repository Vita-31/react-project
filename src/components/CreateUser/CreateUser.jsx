import './CreateUser.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useEffect } from 'react';
import { createUser } from '../../api/users';

function CreateUser() {
    function createNewUser(event) {
       event.preventDefault();
       const name = event.target.name.value;
       const username = event.target.username.value;
       const email = event.target.email.value;
       const website = event.target.website.value
       const phone = event.target.phone.value;
       const street = event.target.street.value;
       const suite = event.target.suite.value;
       const city = event.target.city.value;
       const zipcode = event.target.zipcode.value;
       const newUser = {
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
        createUser(newUser)
            .then(res => console.log(res.data))
        event.target.reset()
    }
  return (
    <form className='form' onSubmit={createNewUser}>
        <div className="formContainer">
            <div className="formBlock">
                <Input title={'Enter your name:'} type={'text'} name={'name'}/>
                <Input title={'Enter your userame:'} type={'text'} name={'username'}/>
                <Input title={'Enter your email:'} type={'email'} name={'email'}/>
                <Input title={'Enter your website:'} type={'text'} name={'website'}/>
                <Input title={'Enter your phone:'} type={'tel'} name={'phone'}/>
            </div>
            <div className="formBlock">
                <Input title={'Enter your street:'} type={'text'} name={'street'}/>
                <Input title={'Enter your suite:'} type={'text'} name={'suite'}/>
                <Input title={'Enter your city:'} type={'text'} name={'city'}/>
                <Input title={'Enter your zipcode:'} type={'number'} name={'zipcode'}/>
            </div>
        </div>
        <div className="formBtns">
            <Button bg={'black'} size={'large'}>Створити</Button>
        </div>
    </form>
  )
}

export default CreateUser