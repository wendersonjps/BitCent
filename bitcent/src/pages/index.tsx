import { useContext } from 'react'
import AuthContext from '@/data/contexts/AuthContext'
import Landing from '@/components/landing'
import Finances from '@/components/finances'
import Loading from '@/components/template/Loading'

export default function Home() {
    const { user, loading } = useContext(AuthContext)

    if (loading) return <Loading />
    return user ? <Finances /> : <Landing />
}
