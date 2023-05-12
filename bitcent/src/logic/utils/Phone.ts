export default class Phone {
    private static _standard = '(??) ?????-????'

    static format(value: string): string {
        const nums = Phone.unformat(value).split('')
        return nums
            .reduce((formatted: string, num: string) => {
                return formatted.replace('?', num)
            }, Phone._standard)
            .split('?')[0]
            .trim()
            .replace(/[()-]$/, '')
    }

    static unformat(value: string): string {
        return value.replace(/[^0-9]+/g, '')
    }
}
