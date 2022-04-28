import './CreateUser.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

function CreateUser() {
  return (
    <form className='form'>
        <div className="formContainer">
            <div className="formBlock">
                <Input title={'Enter your name:'} type={'text'}/>
                <Input title={'Enter your userame:'} type={'text'}/>
                <Input title={'Enter your email:'} type={'email'}/>
                <Input title={'Enter your website:'} type={'text'}/>
                <Input title={'Enter your phone:'} type={'tel'}/>
            </div>
            <div className="formBlock">
                <Input title={'Enter your street:'} type={'text'}/>
                <Input title={'Enter your suite:'} type={'text'}/>
                <Input title={'Enter your city:'} type={'text'}/>
                <Input title={'Enter your zipcode:'} type={'number'}/>
            </div>
        </div>
        <div className="formBtns">
            <Button bg={'black'} size={'large'}>Створити</Button>
        </div>
    </form>
  )
}

export default CreateUser