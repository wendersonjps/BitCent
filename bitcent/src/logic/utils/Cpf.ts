export default class Cpf {
    private static _standard = '???.???.???-??'

    static format(value: string): string {
        const nums = Cpf.unformat(value).split('')

        return nums
            .reduce((formatted: string, num: string) => {
                return formatted.replace('?', num)
            }, Cpf._standard)
            .split('?')[0]
            .replace(/[-.]$/, '')
    }

    static unformat(value: string): string {
        return value.replace(/[^0-9]+/g, '')
    }
}
