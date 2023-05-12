import { TransactionType } from './TransactionType'

export default interface Transaction {
    id?: string
    description: string
    value: number
    date: Date
    type: TransactionType
}

export const voidTransaction: Transaction = {
    description: '',
    value: 0,
    date: new Date(),
    type: TransactionType.EXPENSE,
}
