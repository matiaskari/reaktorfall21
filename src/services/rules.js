import axios from 'axios'
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const localProxy = 'http://localhost:8080/'
const myProxy = 'https://gtcorsproxy.herokuapp.com/'
const baseUrl = 'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'

const getRules = () => {
    const request = axios.get(corsAnywhere + baseUrl, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    return request.then(response => response.data)
}

export default { getRules }