import { useContext, useEffect } from 'react'
import { TextInput } from '@mantine/core'
import AuthContext from '@/data/contexts/AuthContext'
import useForm from '@/data/hooks/useForm'
import MiniForm from '../template/MiniForm'
import User from '@/logic/core/user/User'
import Text from '@/logic/utils/Text'
import Cpf from '@/logic/utils/Cpf'
import Phone from '@/logic/utils/Phone'

export default function Forms() {
    const { user, userUpdate } = useContext(AuthContext)
    const { data, changeAttribute, setData } = useForm<User>()

    useEffect(() => {
        if (!user) return
        setData(user)
    }, [user, setData])

    async function save() {
        if (!user) return
        await userUpdate(data)
    }

    return (
        <div className='flex flex-col mt-2 gap-5'>
            <MiniForm
                title='Seu Nome'
                description='Como você gostaria de ser chamado?'
                msgFooter='O nome deve possuir entre 3 e 80 caracteres!'
                canSave={Text.between(data.name, 3, 80)}
                save={save}
            >
                <TextInput
                    value={data.name}
                    onChange={changeAttribute('name')}
                />
            </MiniForm>
            <MiniForm
                title='CPF'
                description='Seu CPF é usado internamente pelo sistema.'
                msgFooter='Pode relaxar, daqui ele não sai!'
                canSave
                save={save}
            >
                <TextInput
                    value={Cpf.format(data.cpf ?? '')}
                    onChange={changeAttribute('cpf', Cpf.unformat)}
                />
            </MiniForm>
            <MiniForm
                title='Telefone'
                description='Usado para notificações importantes sobre a sua conta.'
                msgFooter='Se receber ligação a cobrar, não fomos nós!'
                canSave
                save={save}
            >
                <TextInput
                    value={Phone.format(data.phone ?? '')}
                    onChange={changeAttribute('phone')}
                />
            </MiniForm>
        </div>
    )
}
