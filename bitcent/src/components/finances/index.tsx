import { Button, SegmentedControl } from '@mantine/core'
import { IconLayoutGrid, IconList, IconPlus } from '@tabler/icons-react'
import { voidTransaction } from '@/logic/core/finances/Transaction'
import useTransaction, { ShowType } from '@/data/hooks/useTransaction'
import Page from '../template/Page'
import Header from '../template/Header'
import DateField from '../template/DateField'
import Content from '../template/Content'
import NotFound from '../template/NotFound'
import Form from './Form'
import List from './List'
import Grid from './Grid'

export default function Finances() {
    const {
        data,
        setData,
        transaction,
        transactions,
        showType,
        setTransaction,
        setShowType,
        save,
        remove,
    } = useTransaction()

    function renderButtons() {
        return (
            <div className='flex justify-between'>
                <DateField date={data} changeDate={setData} />
                <div className='flex gap-5'>
                    <Button
                        onClick={() => setTransaction(voidTransaction)}
                        leftIcon={<IconPlus />}
                        className='bg-gradient-to-r from-violet-600 to-blue-500'
                    >
                        Nova Transação
                    </Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'list' },
                            { label: <IconLayoutGrid />, value: 'grid' },
                        ]}
                        onChange={(type) => setShowType(type as ShowType)}
                    />
                </div>
            </div>
        )
    }

    function renderTransactions() {
        return showType === 'list' ? (
            <List
                transactions={transactions}
                selectTransaction={setTransaction}
            />
        ) : (
            <Grid
                transactions={transactions}
                selectTransaction={setTransaction}
            />
        )
    }

    return (
        <Page>
            <Header />
            <Content className='gap-5'>
                {renderButtons()}
                {transaction ? (
                    <Form
                        transaction={transaction}
                        save={save}
                        delete={remove}
                        cancel={() => setTransaction(null)}
                    />
                ) : transactions.length ? (
                    renderTransactions()
                ) : (
                    <NotFound>Nenhuma transação encontrada!</NotFound>
                )}
            </Content>
        </Page>
    )
}
