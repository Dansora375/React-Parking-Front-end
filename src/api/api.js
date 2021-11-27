import axios from 'axios'



const port = 4000

export default axios.create({
  baseURL : `http://localhost:${port}/api`
})