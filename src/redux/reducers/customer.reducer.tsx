import update from "immutability-helper";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_DATE,
  EDIT_NO_ACCOUNT,
  EDIT_STATUS,
  GET_LIST_CUSTOMER,
} from "../constants";

const initState = {
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
      NoDayUpdate: 0,
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

    case ADD_CUSTOMER:
      return state;
    case EDIT_STATUS:
      const indexStatus = state.customers.findIndex(
        (cus) => cus.ID === action.customerId
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
        (cus) => cus.ID === action.customerId
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
        (cus) => cus.ID === action.customerId
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
        (cus) => cus.ID === action.customerId
      );
      return update(state, {
        customers: {
          $splice: [[indexDelete, 1]]
        },
      });
    default:
      return state;
  }
};

export default rdc_customer;
