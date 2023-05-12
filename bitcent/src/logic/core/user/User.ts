export default interface User {
    id: string
    name: string
    email: string
    imageUrl: string | null
    cpf?: string
    phone?: string
}
