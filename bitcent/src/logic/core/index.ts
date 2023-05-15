import TransactionServices from './finances/TransactionServices'
import UserServices from './user/UserServices'

class Services {
    get transaction() {
        return new TransactionServices()
    }

    get user() {
        return new UserServices()
    }
}

const services = new Services()

export default services
