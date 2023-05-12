import Page from '@/components/template/Page'
import Header from '@/components/template/Header'
import Content from '@/components/template/Content'
import TitlePage from '@/components/template/TitlePage'
import { IconForms } from '@tabler/icons-react'
import user from '@/data/constants/fakeUser'
import Forms from '@/components/user/Forms'

export default function UserRegister() {

    return (
        <Page>
            <Header />
            <Content>
                <TitlePage
                    icon={<IconForms />}
                    main='Dados Cadastrais'
                    secondary={`Informações de ${user.email}`}
                />
                <Forms />
            </Content>
        </Page>
    )
}
