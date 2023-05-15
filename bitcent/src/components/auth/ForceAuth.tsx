import { useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/data/contexts/AuthContext'
import Loading from '../template/Loading'

interface ForceAuthProps {
    children: any
}

export default function ForceAuth(props: ForceAuthProps) {
    const router = useRouter()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading />
    } else if (user?.email) {
        return props.children
    } else {
        router.push('/')
        return <Loading />
    }
}
