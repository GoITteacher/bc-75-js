import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
  params: {},
  header: {},
});

export function getUsers() {
  return axios.get('').then(res => res.data);
}
export function createUser(user) {
  return axios.post('', user).then(res => res.data);
}
export function updateUser(id, user) {
  return axios.patch(`/${id}`, user).then(res => res.data);
}
export function resetUser(id, user) {
  return axios.put(`/${id}`, user).then(res => res.data);
}
export function deleteUser(id) {
  return axios.delete(`/${id}`).then(res => res.data);
}
