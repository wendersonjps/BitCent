import Welcome from './Welcome'
import UserMenu from './UserMenu'

export default function Header() {
    return (
        <div
            className={`
                flex justify-between items-center
                p-7 border-b border-zinc-900
            `}
        >
            <Welcome />
            <UserMenu />
        </div>
    )
}
