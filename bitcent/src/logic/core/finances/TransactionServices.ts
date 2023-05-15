import Collection from '@/logic/firebase/db/Collection'
import User from '../user/User'
import Transaction from './Transaction'
import DateClass from '@/logic/utils/Date'

export default class TransactionServices {
    private _collection = new Collection()

    async save(transaction: Transaction, user: User) {
        return this._collection.save(
            `finances/${user.email}/transactions`,
            transaction
        )
    }

    async delete(transaction: Transaction, user: User) {
        return this._collection.delete(
            `finances/${user.email}/transactions`,
            transaction.id
        )
    }

    async consult(user: User) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.consult(path, 'data', 'asc')
    }

    async consultByMonth(user: User, date: Date) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.consultByFilters(path, [
            { attribute: 'data', op: '>=', value: DateClass.firstDay(date) },
            { attribute: 'data', op: '<=', value: DateClass.lastDay(date) },
        ])
    }
}
