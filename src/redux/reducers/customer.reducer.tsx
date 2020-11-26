import { notification } from "antd";
import { Customer } from "../../types";
import { ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_DATE, EDIT_NUMBERUSE, EDIT_STATUS, GET_COUNT_ARRAY, GET_LIST_CUSTOMER } from "../constanst";
import history from "../../assets/utils/history";
import update from "immutability-helper";
const initState: Array<Customer> = [
  {
    Id: 0,
    CompanyName: "",
    Status: false,
    DatabaseName: "",
    Username: "",
    NoAccount: 0,
    DateExprired: "",
    NoDayUpdate: 0,
  },
];


const rdc_customer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      return action.customers.map((customer: any) => {
        return {
          Id: customer.id,
          CompanyName: customer.name,
          DatabaseName: customer.dbName,
          DateExprired: customer.expireDate,
          NoAccount: customer.numberUser,
          NoDayUpdate: customer.updatedTime,
          Status: customer.status,
          Username: customer.username,
        };
      });

    case EDIT_STATUS:
      const indexStatus = state.findIndex(
        (cus) => cus.Id === action.CustomerID
      );
      notification['success']({
        message: 'Thao tác thành công'
      }); 
      return update(state, {
          [indexStatus]: {
            Status: {
              $set: action.Status,
            },
          },
      });

    case DELETE_CUSTOMER:
      const indexDelete = state.findIndex(
        (cus) => cus.Id === action.id
      );
      notification['success']({
        message: 'Thao tác thành công'
      });
      return update(state, {
          $splice: [[indexDelete, 1]]
      });

      case EDIT_NUMBERUSE:
        const indexNoAccount = state.findIndex(
          (cus) => cus.Id === action.CustomerID
        );
        notification['success']({
          message: 'Thao tác thành công'
        });
        return update(state, {
            [indexNoAccount]: {
              NoAccount: {
                $set: action.noAccount,
              },
            },
        });

      case EDIT_DATE:
        const indexDate = state.findIndex(
          (cus) => cus.Id === action.CustomerID
        );
        notification['success']({
          message: 'Thao tác thành công'
        });
        return update(state, {
            [indexDate]: {
              DateExprired: {
                $set: action.DateExprired,
              },
            },
        });
      case ADD_CUSTOMER:
        if(action.status === 1){
            notification['success']({
              message: 'Thao tác thành công'
          });
          setTimeout(() => {
              history.push("/main")
              //window.location.reload();
          }, 1500);
        }else{
            const args = {
              message: 'Lỗi',
              description:
                'Thêm Database không thành công.',
              duration: 0,
            };
            notification.open(args);
          }
          return state;
    default:
      return state;
  }
};

export default rdc_customer;
