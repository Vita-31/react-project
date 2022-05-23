import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

function Search() {
    return (
        <div className='search'>
            <Input size='higher' type='search' title='Пошук...'/>
            <Button bg={'update'} size={'base'}>Пошук</Button>
        </div>
    )
}

export default Search