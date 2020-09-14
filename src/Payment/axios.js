import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5001/challenge-8572d/us-central1/api'
})
export default instance