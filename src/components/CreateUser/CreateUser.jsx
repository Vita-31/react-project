import './CreateUser.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Error from '../Error/Error';
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
        resetValidation()
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
        if(name === '' || username === '' || email === '' || website === '' || phone === '' || street === '' || suite === '' || city === '' || zipcode === '') {
            setNameError('Name is empty')
            setUserameError('Username is empty')
            setEmailError('Email is empty')
            setWebsiteError('Website is empty')
            setPhoneError('Phone is empty')
            setStreetError('Street is empty')
            setSuiteError('Suite is empty')
            setCityError('City is empty')
            setZipcodeError('Zipcode is empty')
            isValid = false
        }
        return isValid
    }
    function resetValidation() {
        setNameError(null)
        setUserameError(null)
        setEmailError(null)
        setWebsiteError(null)
        setPhoneError(null)
        setStreetError(null)
        setSuiteError(null)
        setCityError(null)
        setZipcodeError(null)
    }
  return (
    <form className='form' onSubmit={createNewUser}>
        <div className="formContainer">
            <div className="formBlock">
                <div>
                    <Input title={'Enter your name:'} type={'text'} name={'name'} validate={nameError ? 'validate' : ''}/>
                    {nameError && <Error>{nameError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your userame:'} type={'text'} name={'username'} validate={usernameError ? 'validate' : ''}/>
                    {usernameError && <Error>{usernameError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your email:'} type={'email'} name={'email'} validate={emailError ? 'validate' : ''}/>
                    {emailError && <Error>{emailError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your website:'} type={'text'} name={'website'} validate={websiteError ? 'validate' : ''}/>
                    {websiteError && <Error>{websiteError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your phone:'} type={'tel'} name={'phone'} validate={phoneError ? 'validate' : ''}/>
                    {phoneError && <Error>{phoneError}</Error>}
                </div>
            </div>
            <div className="formBlock">
                <div>
                    <Input title={'Enter your street:'} type={'text'} name={'street'} validate={streetError ? 'validate' : ''}/>
                    {streetError && <Error>{streetError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your suite:'} type={'text'} name={'suite'} validate={suiteError ? 'validate' : ''}/>
                    {suiteError && <Error>{suiteError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your city:'} type={'text'} name={'city'} validate={cityError ? 'validate' : ''}/>
                    {cityError && <Error>{cityError}</Error>}
                </div>
                <div>
                    <Input title={'Enter your zipcode:'} type={'number'} name={'zipcode'} validate={zipcodeError ? 'validate' : ''}/>
                    {zipcodeError && <Error>{zipcodeError}</Error>}
                </div>
            </div>
        </div>
        <div className="formBtns">
            <Button bg={'black'} size={'large'}>Створити</Button>
        </div>
    </form>
  )
}

export default CreateUser