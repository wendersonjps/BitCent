import React from 'react'
import ResponsiveImage from '../common/ResponsiveImage'

export interface AdvantageProps {
    image: any
    title: string
    subtitle: string
    reverse?: boolean
}

export default function Advantage(props: AdvantageProps) {
    return (
        <div
            className={`
                flex flex-col justify-around items-center w-full gap-6
                ${props.reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}
            `}
        >
            <ResponsiveImage
                image={props.image}
                className={props.reverse ? 'sm:rotate-6' : 'sm:-rotate-6'}
            />
            <div
                className={`
                    flex flex-col gap-y-6 sm:w-[350px]
                    text-center sm:text-left
                `}
            >
                <div
                    className={`
                        flex flex-col text-white
                        font-black text-2xl sm:text-4xl
                    `}
                >
                    {props.title}
                </div>
                <span className='font-light text-base sm:text-lg text-zinc-500'>
                    {props.subtitle}
                </span>
            </div>
        </div>
    )
}
