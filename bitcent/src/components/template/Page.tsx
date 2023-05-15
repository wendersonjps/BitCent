import ForceAuth from '../auth/ForceAuth'

interface PageProps {
    external?: boolean
    children: any
    className?: string
}

export default function Page(props: PageProps) {
    function render() {
        return (
            <div
                className={`
                    flex flex-col min-h-screen
                    bg-gradient-to-r from-zinc-900 via-black to-zinc-900
                    ${props.className ?? ''}
                `}
            >
                {props.children}
            </div>
        )
    }

    return props.external ? render() : <ForceAuth>{render()}</ForceAuth>
}
