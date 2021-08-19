import axios from 'axios';

//const baseUrl = 'https://asm-basic-rest-server.herokuapp.com/api';
const baseUrl = 'http://localhost:8080/api';

const UserServices = {
    login: (data) =>
        axios.post(`${baseUrl}/auth/login`, {
            email: data.email,
            password: data.password,
        }),
    getUsers: (limit) =>
        axios.get(`${baseUrl}/users/${limit ? `?limit=${limit}` : ''}`, {
            headers: { token: localStorage.getItem('token') },
        }),
    getUserData: (id) =>
        axios.get(`${baseUrl}/users/${id}`, {
            headers: { token: localStorage.getItem('token') },
        }),
    updateUser: (user) =>
        axios.put(`${baseUrl}/users/${user.id}`, user, {
            headers: { token: localStorage.getItem('token') },
        }),
    createUser: (data) => {
        axios.post(`${baseUrl}/users/`, data, {
            headers: { token: localStorage.getItem('token') },
        });
    },
    deleteUser: (id) =>
        axios.delete(`${baseUrl}/users/${id}`, {
            headers: { token: localStorage.getItem('token') },
        }),
};

export default UserServices;
