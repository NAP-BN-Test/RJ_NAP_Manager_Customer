export interface Customer {
    Id: number,
    CompanyName: string,
    Status: boolean,
    DatabaseName: string,
    Username: string,
    NoAccount: number,
    DateExprired: string,
    NoDayUpdate: number
}

export type toggleChangeStatus = (customerID: number, status: boolean) => void

export type toggleEditNumberUser = (customerID: number, dbName: string, userName: string,account:  number, customerName: string ) => void

export type toggleEditDateTime = (customerID: number, dateExprired: string) => void

export type toggleDelete = (dbName: string, username: string, id: number) => void

export type AddNewCustomer = (customerName: string, numberUser: number, duration: string, username: string, password: string, dbName: string) => void
