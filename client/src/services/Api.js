import axios from 'axios';

export default () => {
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const dateTime = date + ' ' + time;

    console.log('connected ' + dateTime)
    return axios.create({
        baseURL: `http://192.168.1.234:3000`
    })
}