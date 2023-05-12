import { useState } from 'react'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Transaction, { voidTransaction } from '@/logic/core/finances/Transaction'
import Id from '@/logic/core/shared/Id'
import Page from '../template/Page'
import Header from '../template/Header'
import Content from '../template/Content'
import NotFound from '../template/NotFound'
import Form from './Form'
import List from './List'
import fakeTransactions from '@/data/constants/fakeTransactions'


export default function Finances() {
    const [transactions, setTransactions] = useState<Transaction[]>(fakeTransactions)
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    function save(transaction: Transaction) {
        const othersTransactions = transactions.filter(
            (t) => t.id !== transaction.id
        )
        setTransactions([
            ...othersTransactions,
            {
                ...transaction,
                id: transaction.id ?? Id.new(),
            },
        ])
        setTransaction(null)
    }

    function remove(transaction: Transaction) {
        const othersTransactions = transactions.filter(
            (t) => t.id !== transaction.id
        )
        setTransactions(othersTransactions)
        setTransaction(null)
    }

    return (
        <Page>
            <Header />
            <Content className='gap-5'>
                <Button
                    onClick={() => setTransaction(voidTransaction)}
                    leftIcon={<IconPlus />}
                    color='indigo'
                    className='bg-indigo-600'
                >
                    Nova Transação
                </Button>
                {transaction ? (
                    <Form
                        transaction={transaction}
                        save={save}
                        delete={remove}
                        cancel={() => setTransaction(null)}
                    />
                ) : transactions.length ? (
                    <List
                        transactions={transactions}
                        selectTransaction={setTransaction}
                    />
                ) : (
                    <NotFound>Nenhuma transação encontrada!</NotFound>
                )}
            </Content>
        </Page>
    )
}
