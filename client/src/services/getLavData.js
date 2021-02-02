import Api from '@/services/Api'

export default {
    getData() {
        console.log('Service:', 'lav')
        return Api().get('/lav')
    }
}