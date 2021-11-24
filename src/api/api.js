import axios from 'axios'



const port = 3000

export default axios.create({
  baseURL : `http://localhost:${port}/api`
})