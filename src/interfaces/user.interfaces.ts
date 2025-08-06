export interface IUser {
    firstName: string,
    lastName: string,
    age: number,
    password: string,
    role: 'user' | 'admin'
    email: string
}