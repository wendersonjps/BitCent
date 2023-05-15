import { createContext, useEffect, useState } from 'react'
import services from '@/logic/core'
import User from '@/logic/core/user/User'
import Authentication from '@/logic/firebase/auth/Auth'

interface AuthProps {
    loading: boolean
    user: User | null
    loginGoogle: () => Promise<User | null>
    logout: () => Promise<void>
    userUpdate: (newUser: User) => Promise<void>
}

const AuthContext = createContext<AuthProps>({
    loading: true,
    user: null,
    loginGoogle: async () => null,
    logout: async () => {},
    userUpdate: async () => {},
})

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const cancel = services.user.authMonitor((user) => {
            setUser(user)
            setLoading(false)
        })
        return () => cancel()
    }, [])

    async function userUpdate(newUser: User) {
        if (user && user.email !== newUser.email) return logout()
        if (user && newUser && user.email === newUser.email) {
            await services.user.save(newUser)
            setUser(newUser)
        }
    }

    async function loginGoogle() {
        const user = await services.user.loginGoogle()
        setUser(user)
        return user
    }

    async function logout() {
        await services.user.logout()
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                loading,
                user,
                loginGoogle,
                logout,
                userUpdate,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
