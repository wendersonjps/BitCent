export default class DateClass {
    private static _lang = 'pt-BR'

    static ddmmyy = {
        format(dt: Date, separator: string = '/'): string {
            const day = dt.getDate().toString().padStart(2, '0')
            const month = (dt.getMonth() + 1).toString().padStart(2, '0')
            return `${day}${separator}${month}${separator}${dt.getFullYear()}`
        },
    }

    static mmyy = {
        format(dt: Date, lang?: string): string {
            return dt?.toLocaleDateString?.(lang ?? DateClass._lang, {
                month: 'long',
                year: 'numeric',
            } as Intl.DateTimeFormatOptions)
        },
    }

    static ddmm = {
        format(dt: Date): string {
            return dt?.toLocaleDateString?.(DateClass._lang, {
                day: '2-digit',
                month: 'short',
            } as Intl.DateTimeFormatOptions)
        },
    }

    static months() {
        return Array(12)
            .fill(0)
            .map((_, i) =>
                new Date(2000, i, 1)
                    .toLocaleDateString(DateClass._lang, { month: 'short' })
                    .toUpperCase()
                    .substring(0, 3)
            )
    }

    static firstDay(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth(), 1)
    }

    static lastDay(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0, 23, 59, 59)
    }
}
