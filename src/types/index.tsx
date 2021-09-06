export interface Customer {
  ID: number;
  CompanyName: string;
  CompanyCode: string;
  MaSoThue: string;
  Email: string;
  PhoneNumber: string;
  DaiDien: string;
  Address: string;
  Status: boolean;
  DatabaseName: string;
  Username: string;
  NoAccount: number;
  DateExpired: string;
  NoDayUpdate: number;
  LoaiKhachHang: string;
  Duration: number;
  LocyVersion: number;
}

// export interface CustomerRegister {
//   ID: number;
//   name: "Mike";
//   address: "10 Downing Street";
//   MST: "1";
//   Email: "1";
//   SDT: "0333968999";
//   daidien: "Dũng";
// }

export interface Alert {
  type: string;
  message: string;
}
export interface objectID {
  id: number;
}

export type ToggleVisiable = (visiable: boolean) => void;

export type ToggleAddCustomer = (
  customerName: string,
  customerCode: string,
  masothue: string,
  address: string,
  nguoidaidien: string,
  phonenumber: string,
  email: string,
  loaikhachhang: string,
  duration: string,
  numberUser: number,
  locyversion: number
) => void;

export type ToggleChangeStatus = (id: number, status: boolean) => void;

export type ToggleChangeDate = (id: number, date: string) => void;

export type ToggleChangeNoAccount = (
  id: number,
  dbName: string,
  username: string,
  noAccount: number,
  customerName: string
) => void;

export type ToggleDelete = (
  dbName: string,
  username: string,
  id: number
) => void;
