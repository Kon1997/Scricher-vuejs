import axios from 'axios'
import { getToken } from './auth'

const serverAdress = "http://localhost:3000/api/"

export function sendPost(message) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: serverAdress + 'posts',
      data: {
        message: message
      },
      headers: {
        'Authorization': 'JWT ' + getToken()
      }
    })
    .then(({ data }) => {
      console.log(data)
      resolve(data)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

export function getPosts(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: serverAdress + 'posts',
      headers: {
        'Authorization': 'JWT ' + getToken()
      },
      params: params
    })
    .then(({ data }) => {
      console.log(data)
      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export function getUsersPosts(userid, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: serverAdress + 'users/posts/' + userid,
      headers: {
        'Authorization': 'JWT ' + getToken()
      },
      params: params
    })
    .then(({ data }) => {
      console.log(data)
      resolve(data)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

export function getUserById(userid, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: serverAdress + 'users/' + userid,
      headers: {
        'Authorization': 'JWT ' + getToken()
      },
      params: params
    })
    .then(({ data }) => {
      console.log(data)
      resolve(data)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

export function sendComment(id, message) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: serverAdress + 'comments/' + id,
      data: {
        message: message
      },
      headers: {
        'Authorization': 'JWT ' + getToken()
      }
    })
    .then(({ data }) => {
      console.log(data)
      resolve(data)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

export function getComments(id, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: serverAdress + 'comments/' + id,
      headers: {
        'Authorization': 'JWT ' + getToken()
      },
      params: params
    })
    .then(({ data }) => {
      console.log("comment ", data)
      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export function removeUser(id) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: serverAdress + 'users/' + id,
      headers: {
        'Authorization': 'JWT ' + getToken()
      }
    })
    .then(({ data }) => {
      console.log('user ', data)
      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}