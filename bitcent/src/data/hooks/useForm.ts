import { useCallback, useState } from 'react'

export default function useForm<T = any>(initialData?: T) {
    const [data, setData] = useState<T>(initialData ?? {} as T)

    const changeAttribute = useCallback(function (attribute: string, fn?: Function) {
        return (valueOrEvent: any) => {
            const v = valueOrEvent?.target?.value ?? valueOrEvent
            setData({ ...data, [attribute]: fn?.(v) ?? v })
        }
    }, [data])

    return {
        data,
        setData,
        changeAttribute,
    }
}
