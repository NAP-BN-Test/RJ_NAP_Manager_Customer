import update from "immutability-helper";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_DATE,
  EDIT_NO_ACCOUNT,
  EDIT_STATUS,
  GET_INFO_CUSTOMER,
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_REGISTER,
} from "../constants";

const initState: any = {
  total: 0,
  customers: [
    {
      ID: 0,
      CompanyName: "",
      Status: false,
      DatabaseName: "",
      Username: "",
      NoAccount: 0,
      DateExpired: "",
      NoDayUpdate: "",
      Address: "",
      MaSoThue: "",
      NguoiDaiDien: "",
      PhoneNumber: "",
      Email: "",
      LoaiKhachHang: "",
      Duration: 0,
      LocyVersion: "",
      TongTien: 0,
      DaThanhToan: 0,
      ConNo: 0,
    },
  ],
};

const rdc_customer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      return {
        total: action.totals,
        customers: action.customers.map((customer: any) => {
          return {
            ID: customer.id,
            CompanyName: customer.name,
            DatabaseName: customer.dbName,
            DateExpired: customer.expireDate,
            NoAccount: customer.numberUser,
            NoDayUpdate: customer.updatedTime,
            Status: customer.status,
            Username: customer.username,
          };
        }),
      };
    case GET_INFO_CUSTOMER:
      return {
        total: 0,
        customers: [
          {
            ID: action.customers.id,
            CompanyName: action.customers.companyName,
            CompanyCode: action.customers.companyCode,
            MaSoThue: action.customers.masothue,
            Address: action.customers.address,
            NguoiDaiDien: action.customers.nguoidaidien,
            PhoneNumber: action.customers.phonenumber,
            Email: action.customers.email,
            LoaiKhachHang: action.customers.loaikhachhang,
            DateExpired: action.customers.expireDate,
            Duration: action.customers.duration,
            NoAccount: parseInt(action.customers.numberUser),
            NoDayUpdate: action.customers.updatedTime,
            LocyVersion: action.customers.locyversion,
            DaThanhToan: action.customers.dathanhtoan,
            TongTien: action.customers.tongtien,
            DatabaseName: action.customers.dbName,
          },
        ],
      };
    case GET_LIST_CUSTOMER_REGISTER:
      return {
        total: action.totals,
        customers: action.customers.map((customer: any) => {
          return {
            ID: customer.id,
            CompanyName: customer.name,
            DatabaseName: customer.dbName,
            DateExpired: customer.expireDate,
            NoAccount: customer.numberUser,
            NoDayUpdate: customer.updatedTime,
            Status: customer.status,
            Username: customer.username,
            Address: customer.address,
            MaSoThue: customer.masothue,
            NguoiDaiDien: customer.nguoidaidien,
            PhoneNumber: customer.phonenumber,
            Email: customer.email,
            LoaiKhachHang: customer.loaikhachhang,
            DaThanhToan: customer.dathanhtoan,
            ConNo: customer.tongtien - customer.dathanhtoan,
          };
        }),
      };
    case ADD_CUSTOMER:
      return state;
    case EDIT_STATUS:
      const indexStatus = state.customers.findIndex(
        (cus: any) => cus.ID === action.customerId
      );
      return update(state, {
        customers: {
          [indexStatus]: {
            Status: {
              $set: action.status,
            },
          },
        },
      });
    case EDIT_DATE:
      const indexDate = state.customers.findIndex(
        (cus: any) => cus.ID === action.customerId
      );
      return update(state, {
        customers: {
          [indexDate]: {
            DateExpired: {
              $set: action.dateExprired,
            },
          },
        },
      });
    case EDIT_NO_ACCOUNT:
      const indexNoAccount = state.customers.findIndex(
        (cus: any) => cus.ID === action.customerId
      );
      return update(state, {
        customers: {
          [indexNoAccount]: {
            NoAccount: {
              $set: action.noAccount,
            },
          },
        },
      });
    case DELETE_CUSTOMER:
      const indexDelete = state.customers.findIndex(
        (cus: any) => cus.ID === action.customerId
      );
      return update(state, {
        customers: {
          $splice: [[indexDelete, 1]],
        },
      });
    default:
      return state;
  }
};

export default rdc_customer;
