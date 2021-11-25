import axios from 'axios'



const port = 2000

export default axios.create({
  baseURL : `http://localhost:${port}/api`
})