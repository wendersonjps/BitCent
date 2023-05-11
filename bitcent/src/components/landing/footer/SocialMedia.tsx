import React from 'react'
import Link from 'next/link'

interface SocialMediaProps {
    icon: any
    url: string
}

export default function SocialMedia(props: SocialMediaProps) {
    return (
        <Link href={props.url} target='_blank'>
            <div className='bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer'>
                {React.cloneElement(props.icon, {
                    size: 35,
                    strokeWidth: 1,
                    className: 'text-indigo-600',
                })}
            </div>
        </Link>
    )
}
