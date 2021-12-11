import axios from 'axios'

const instance = axios.create({
    baseURL : "https://whatsappcloneserver.herokuapp.com"
})

export default instance