import Api from '@/services/Api'

export default {
    getData() {
        console.log('lav')
        return Api().get('/lav')
    }
}