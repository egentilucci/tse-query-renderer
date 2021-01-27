import Api from '@/services/Api'

export default {
    getData() {
        console.log('stordc')
        return Api().get('/')
    }
}