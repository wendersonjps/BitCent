import { useState } from 'react'
import Transaction from '@/logic/core/finances/Transaction'

export default function useForm(initialData: Transaction) {
    const [data, setData] = useState(initialData)

    function changeAttribute(attribute: string, fn?: Function) {
        return (valueOrEvent: any) => {
            const v = valueOrEvent?.target?.value ?? valueOrEvent
            setData({ ...data, [attribute]: fn?.(v) ?? v })
        }
    }

    return {
        data,
        setData,
        changeAttribute,
    }
}
