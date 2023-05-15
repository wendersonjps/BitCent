import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { AuthProvider } from '@/data/contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </MantineProvider>
    )
}
