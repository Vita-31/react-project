import axios from "axios";

const api = axios.create({
    baseURL: 'https://app-json3.herokuapp.com/users'
    // baseURL: 'https://jsonplaceholder.typicode.com/users'
})

export function getUsers(query) {
    return api.get('/', {params: query})
}

export function getUser(id) {
    return api.get(`/${id}`)
}

export function createUser(data) {
    return api.post('', data)
}

export function updateUser(id, data) {
    return api.patch(`/${id}`, data)
}

export function deleteUser(id) {
    return api.delete(`/${id}`)
}