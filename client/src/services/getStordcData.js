import Api from '@/services/Api'

export default {
    getData() {
        console.log('Service:', 'stordc')
        return Api().get('/')
    }
}