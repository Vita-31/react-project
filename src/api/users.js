import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:1234/users'
})

export function getUsers() {
    return api.get('')
}

export function getUser(id) {
    return api.get(`${id}`)
}

export function createUser(data) {
    return api.post('', data)
}

export function updateUser(id, data) {
    return api.patch(`${id}`, data)
}

export function deleteUser(id) {
    return api.delete(`${id}`)
}