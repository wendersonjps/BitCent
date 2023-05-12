import 'dayjs/locale/pt-br'
import { Button, Group, Radio, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import useForm from '@/data/hooks/useForm'
import { TransactionType } from '@/logic/core/finances/TransactionType'
import Transaction from '@/logic/core/finances/Transaction'
import Money from '@/logic/utils/Money'

interface FormProps {
    transaction: Transaction
    save?: (transaction: Transaction) => void
    cancel?: () => void
    delete?: (transaction: Transaction) => void
}

export default function Form(props: FormProps) {
    const {data, changeAttribute} = useForm(props.transaction)

    return (
        <div
            className={`
                flex flex-col border border-zinc-700
                rounded-xl overflow-hidden
            `}
        >
            <div className='bg-black py-3 px-7 text-zinc-400'>Formulário</div>
            <div className='flex flex-col gap-4 p-4 sm:p-7'>
                <TextInput
                    label='Descrição'
                    value={data.description}
                    onChange={changeAttribute('description')}
                />
                <TextInput
                    label='Valor'
                    value={Money.format(data.value)}
                    onChange={changeAttribute('value', Money.unformat)}
                />
                <DatePickerInput
                    label='Data'
                    value={data.date}
                    locale='pt-BR'
                    valueFormat='DD/MM/YYYY'
                    onChange={changeAttribute('date')}
                />
                <Radio.Group
                    value={data.type}
                    onChange={changeAttribute('type')}
                >
                    <Group>
                        <Radio
                            value={TransactionType.REVENUE}
                            label='Receita'
                        />
                        <Radio
                            value={TransactionType.EXPENSE}
                            label='Despesa'
                        />
                    </Group>
                </Radio.Group>
                <div className='flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800 rounded-md'>
                    <Button
                        onClick={() => props.save?.(data)}
                        color='green'
                        className='bg-green-600'
                    >
                        Salvar
                    </Button>
                    <Button
                        onClick={props.cancel}
                        color='gray'
                        className='bg-zinc-600'
                    >
                        Voltar
                    </Button>
                    <div className='flex-1'></div>
                    {data.id && (
                        <Button
                            onClick={() => props.delete?.(data)}
                            color='red'
                            className='bg-red-500'
                        >
                            Excluir
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
