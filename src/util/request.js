import axios from 'axios'

console.log('555')
console.log(process.env)
const testRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
})

export default testRequest