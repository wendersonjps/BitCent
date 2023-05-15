import { useCallback, useContext, useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import Transaction from '@/logic/core/finances/Transaction'
import services from '@/logic/core'

export type ShowType = 'list' | 'grid'

export default function useTransaction() {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState<Date>(new Date())
    const [showType, setShowType] = useState<ShowType>('list')
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    const searchTransaction = useCallback(async function () {
        if (!user) return
        const transactions = await services.transaction.consultByMonth(user, data)
        setTransactions(transactions)
    }, [user, data])

    useEffect(() => {
        searchTransaction()
    }, [searchTransaction, data])

    async function save(transaction: Transaction) {
        if (!user) return
        services.transaction.save(transaction, user)
        setTransaction(null)
        await searchTransaction()
    }

    async function remove(transaction: Transaction) {
        if (!user) return
        await services.transaction.delete(transaction, user)
        setTransaction(null)
        await searchTransaction()
    }

    return {
        data,
        transaction,
        transactions,
        showType,
        setData,
        setTransaction,
        setShowType,
        save,
        remove,
    }
}
