export default class Money {
    private static _lang = 'pt-BR'
    private static _currency = 'BRL'

    static format(num: number): string {
        return (num ?? 0).toLocaleString(Money._lang, {
            style: 'currency',
            currency: Money._currency,
        })
    }

    static unformat(value: string): number {
        const nums = value.replace(/[^0-9]+/g, '')
        const i = nums.length - 2
        return Number(`${nums.substring(0, i)}.${nums.substring(i)}`)
    }
}
