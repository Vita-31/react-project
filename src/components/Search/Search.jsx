import React from 'react';
// import { getUsers } from '../../api/users';
import useUsers from '../../hooks/useUsers';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

function Search() {

    const {setSearchQuery} = useUsers()

    function search(event) {
        event.preventDefault();
        const query = event.target.search.value.trim().toLowerCase();
        setSearchQuery(query)

        // getUsers()
        //     .then((res) => setUsers(res.data))
        //     .catch((err) => setUsersError(err))
        //     .finally(() => setUsersLoad(false))
    }

    return (
        <form className='search' onSubmit={search}>
            <Input size='higher' name='search' type='search' title='Пошук...'/>
            <Button bg={'update'} size={'base'}>Пошук</Button>
        </form>
    )
}

export default Search