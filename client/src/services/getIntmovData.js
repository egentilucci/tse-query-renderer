import Api from '@/services/Api'

export default {
    getData() {
        console.log('intmov')
        return Api().get('/intmov')
    }
}