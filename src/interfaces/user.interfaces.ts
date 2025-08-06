export interface IAddress{
    village: string,
    city: string,
    zip: number
  
}

export interface IUser {
    firstName: string,
    lastName: string,
    age: number,
    password: string,
    role: 'user' | 'admin'
    email: string,
    address: IAddress
}