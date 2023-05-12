import { Button } from '@mantine/core'

interface MiniFormProps {
    title: string
    description: string
    msgFooter: string
    canSave: boolean
    save: () => void
    children: any
}

export default function MiniForm(props: MiniFormProps) {
    return (
        <div
            className={`
                flex flex-col overflow-hidden
                border border-zinc-800 rounded-lg
            `}
        >
            <div className='flex flex-col p-7'>
                <div className='text-3xl font-thin'>{props.title}</div>
                <div className='mt-4 text-zinc-400'>{props.description}</div>
                <div className='mt-3'>{props.children}</div>
            </div>
            <div
                className={`
                    flex justify-end md:justify-between items-center
                    bg-[#111] px-7 py-5
                `}
            >
                <span className='hidden md:inline text-zinc-400'>
                    {props.msgFooter}
                </span>
                <Button
                    onClick={() => (props.canSave ? props.save() : null)}
                    color={props.canSave ? 'green' : 'gray'}
                    className={props.canSave ? 'bg-green-600' : 'bg-zinc-800'}
                >
                    Salvar
                </Button>
            </div>
        </div>
    )
}
