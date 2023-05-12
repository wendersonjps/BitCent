import { TextInput } from '@mantine/core'
import useForm from '@/data/hooks/useForm'
import MiniForm from '../template/MiniForm'
import user from '@/data/constants/fakeUser'
import User from '@/logic/core/user/User'
import Text from '@/logic/utils/Text'
import Cpf from '@/logic/utils/Cpf'
import Phone from '@/logic/utils/Phone'

export default function Forms() {
    const { data, changeAttribute } = useForm<User>(user)

    return (
        <div className='flex flex-col mt-2 gap-5'>
            <MiniForm
                title='Seu Nome'
                description='Como você gostaria de ser chamado?'
                msgFooter='O nome deve possuir entre 3 e 80 caracteres!'
                canSave={Text.between(data.name, 3, 80)}
                save={() => {}}
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
                save={() => {}}
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
                save={() => {}}
            >
                <TextInput
                    value={Phone.format(data.phone ?? '')}
                    onChange={changeAttribute('phone')}
                />
            </MiniForm>
        </div>
    )
}
