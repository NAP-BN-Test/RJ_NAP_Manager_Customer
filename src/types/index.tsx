export interface Customer {
    ID: number;
    CompanyName: string,
    Status: boolean,
    DatabaseName: string,
    Username: string,
    NoAccount: number,
    DateExpired: string,
    NoDayUpdate: number
}

export interface Alert {
    type: string,
    message: string,
}

export type ToggleVisiable = (visiable: boolean) => void

export type ToggleAddCustomer = (customerName: string, dbName: string, duration: string, noAccount: number, username: string, password: string) => void

export type ToggleChangeStatus = (id: number, status: boolean) => void

export type ToggleChangeDate = (id: number, date: string) => void

export type ToggleChangeNoAccount = (id: number, dbName: string, username: string, noAccount: number, customerName: string) => void

export type ToggleDelete = (dbName: string, username: string, id: number) => void
