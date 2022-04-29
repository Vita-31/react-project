import './CreateUser.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { createUser } from '../../api/users';
import { useState } from 'react';

function CreateUser() {
    const [nameError, setNameError] = useState(null)
    const [usernameError, setUserameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [websiteError, setWebsiteError] = useState(null)
    const [phoneError, setPhoneError] = useState(null)
    const [streetError, setStreetError] = useState(null)
    const [suiteError, setSuiteError] = useState(null) 
    const [cityError, setCityError] = useState(null)
    const [zipcodeError, setZipcodeError] = useState(null)
    function createNewUser(event) {
        event.preventDefault();
        const isValid = validateForm(event.target)
        if(isValid) {
            const name = event.target.name.value.trim();
            const username = event.target.username.value.trim();
            const email = event.target.email.value.trim();
            const website = event.target.website.value.trim()
            const phone = event.target.phone.value.trim();
            const street = event.target.street.value.trim();
            const suite = event.target.suite.value.trim();
            const city = event.target.city.value.trim();
            const zipcode = event.target.zipcode.value.trim();
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
            event.target.reset()
        } else {
            console.log('not validate')
        }
    }
    function validateForm(form) {
        const name = form.name.value.trim();
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const website = form.website.value.trim()
        const phone = form.phone.value.trim();
        const street = form.street.value.trim();
        const suite = form.suite.value.trim();
        const city = form.city.value.trim();
        const zipcode = form.zipcode.value.trim();
        let isValid = true;
        if(name === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(username === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(email === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(website === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(phone === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(street === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(suite === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(city === '') {
            setNameError('Name is required')
            isValid = false
        }
        if(zipcode === '') {
            setNameError('Name is required')
            isValid = false
        }
        return isValid
    }
  return (
    <form className='form' onSubmit={createNewUser}>
        <div className="formContainer">
            <div className="formBlock">
                <Input title={'Enter your name:'} type={'text'} name={'name'} validate={nameError ? 'validate' : ''}/>
                <Input title={'Enter your userame:'} type={'text'} name={'username'} validate={usernameError ? 'validate' : ''}/>
                <Input title={'Enter your email:'} type={'email'} name={'email'} validate={emailError ? 'validate' : ''}/>
                <Input title={'Enter your website:'} type={'text'} name={'website'} validate={websiteError ? 'validate' : ''}/>
                <Input title={'Enter your phone:'} type={'tel'} name={'phone'} validate={phoneError ? 'validate' : ''}/>
            </div>
            <div className="formBlock">
                <Input title={'Enter your street:'} type={'text'} name={'street'} validate={streetError ? 'validate' : ''}/>
                <Input title={'Enter your suite:'} type={'text'} name={'suite'} validate={suiteError ? 'validate' : ''}/>
                <Input title={'Enter your city:'} type={'text'} name={'city'} validate={cityError ? 'validate' : ''}/>
                <Input title={'Enter your zipcode:'} type={'number'} name={'zipcode'} validate={zipcodeError ? 'validate' : ''}/>
            </div>
        </div>
        <div className="formBtns">
            <Button bg={'black'} size={'large'}>Створити</Button>
        </div>
    </form>
  )
}

export default CreateUser