import user from '@/data/constants/fakeUser'

// https://unicode-table.com/en/1F44B/
export default function Welcome() {
    function renderName() {
        return (
            <span className='hidden sm:inline'>
                {user?.name?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black`}>
            Olá {renderName()} 👋
        </div>
    )
}
