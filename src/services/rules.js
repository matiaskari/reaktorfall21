import axios from 'axios'
const myProxy = 'https://gtrcorsproxy.herokuapp.com/'
const baseUrl = 'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'

const getRules = () => {
    const request = axios.get(myProxy + baseUrl, {
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    return request.then(response => response.data)
}

export default { getRules }