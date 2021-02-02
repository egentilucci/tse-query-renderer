import Api from '@/services/Api'

export default {
    getData() {
        console.log('Service:', 'intmov')
        return Api().get('/intmov')
    }
}