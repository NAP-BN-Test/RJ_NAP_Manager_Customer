import { genKey } from "../../assets/utils";
import { Services } from "../../services";
import { Customer } from "../../types/index";
import * as constants from "../constanst/index";

export interface Get_List_Customer {
  type: constants.GET_LIST_CUSTOMER;
  customer: Customer;
}

export type AUTHENTICATE = Get_List_Customer;

//Function gọi đến reducer
function func_get_list_customer(customer: any) {
  return {
    type: constants.GET_LIST_CUSTOMER,
    customers: customer,
  };
}

function act_get_countArray(count: number){
  return {
    type: constants.GET_COUNT_ARRAY,
    count: count,
  };
}

function func_edit_status(CustomerID: number, status: boolean) {
  return {
    type: constants.EDIT_STATUS,
    Status: status,
    CustomerID: CustomerID,
  };
}

function func_edit_date(CustomerID: number, DateExprired: string) {
  return {
    type: constants.EDIT_DATE,
    CustomerID: CustomerID,
    DateExprired: DateExprired
  };
}

function func_edit_user(CustomerID: number, noAccount: number) {
  return {
    type: constants.EDIT_NUMBERUSE,
    CustomerID: CustomerID,
    noAccount: noAccount,
  };
}

function func_delete_db(id: number){
  return {
    type: constants.DELETE_CUSTOMER,
    id: id,
  };
}

function func_addDB(status: number){
  return {
    type: constants.ADD_CUSTOMER,
    status: status,
  };
}

function act_alert_success(messages: string) {
  return {
    type: constants.ALERT_SUCCESS,
    message: messages,
  };
}

function act_alert_error(messages: string) {
  return {
    type: constants.ALERT_ERROR,
    message: messages,
  };
}

function act_show_loading(messages: string) {
  return {
    type: constants.SHOW_LOADING,
    message: messages,
  };
}

function act_hide_loading() {
  return {
    type: constants.HIDE_LOADING,
  };
}

//action xử lý
function act_get_list_customer(pageNumber: number) {
  return (dispatch: any) => {
     
      let body = {
        searchKey: "",
        page: pageNumber,
      };
      
        Services.get_list_customer(body).then((res: any) => {
          if (res.status === 1) {
            let count = res.total;
            // console.log(res);
            let customers = res.array;
            dispatch(act_get_countArray(count));
            dispatch(func_get_list_customer(customers));
          } else {
            dispatch(act_alert_error("Lấy dữ liệu thất bại!"));
          }
        });
      
      
    }
      
}

function act_change_status(CustomerID: number, Status: boolean) {
  return (dispatch: any) => {
    let body = {
      customerID: CustomerID,
      status: Status ? false : true,
    };
    Services.change_status(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_edit_status(CustomerID, body.status));
      } else {
        dispatch(act_alert_error("Thay đổi trạng thái không thành công!"));
      }
    });
  };
}

function act_change_date(CustomerID: number, DateExprired: string) {
  return (dispatch: any) => {
    let body = {
      customerID: CustomerID,
      date: DateExprired,
    };
    Services.change_date(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_edit_date(CustomerID, DateExprired));
      } else {
        // dispatch(func_edit_date(2));
      }
    });
  };
}

function act_change_NumberUser(
  customerID: number,
  dbName: string,
  username: string,
  numberUser: number,
  customerName: string
) {
  return (dispatch: any) => {
    let body = {
      customerID: customerID,
      dbName: dbName,
      username: username,
      numberUser: numberUser,
      customerName: customerName,
    };

    Services.change_numberUser(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_edit_user(customerID, numberUser));
      } else {
        // dispatch(func_edit_user());
      }
    });
  };
}

function act_deleteDB(dbName: string, username: string, id: number) {
  return (dispatch: any) => {
    let body = {
      dbName: dbName,
      username: username,
      id: id,
    };

    Services.deleteDB(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_delete_db( id));
      } else {
        console.log("Xóa database không thành công");
      }
    });
  };
}

function act_accCustomerDB(
  customerName: string,
  numberUser: number,
  duration: string,
  username: string,
  password: string,
  dbName: string
) {
  return (dispatch: any) => {
    let body = {
      customerName: customerName,
      numberUser: numberUser,
      duration: duration,
      username: username,
      password: password,
      dbName: dbName,
      key: genKey(),
    };

    let bodyAddatabase = {
      dbName: dbName,
      username: username,
      password: password,
    };

    let bodyConfig = {
      dbName: dbName,
      username: username,
      password: password,
      key: body.key,
      customerName: customerName,
      numberUser: numberUser,
    };

    //console.log(bodyConfig);
    dispatch(act_show_loading("Đang tạo tên Database ..."));
    Services.create_database(bodyAddatabase).then((createDB: any) => {
      dispatch(act_hide_loading());
      if (createDB.status === 1) {
  
        dispatch(act_show_loading("Đang tạo bảng ..."));
        Services.create_table(bodyAddatabase).then((createTB: any) => {
          dispatch(act_hide_loading());
          if (createTB.status === 1) {
      
            dispatch(act_show_loading("Đang thêm database vào bảng ..."));
            Services.add_databse_table(bodyAddatabase).then((addDB: any) => {
              dispatch(act_hide_loading());
              if (addDB.status === 1) {
          
                dispatch(act_show_loading("Đang thêm nước vào bảng ..."));
                Services.insert_country(bodyAddatabase).then(
                  (addCountry: any) => {
                    dispatch(act_hide_loading());
                    if (addCountry.status === 1) {
                
                      dispatch(act_show_loading("Đang thêm city vào bảng ..."));
                      Services.insert_city(bodyAddatabase).then(
                        (addCity: any) => {
                          dispatch(act_hide_loading());
                          if (addCity.status === 1) {
                      
                            dispatch(
                              act_show_loading("Đang thêm port vào bảng ...")
                            );
                            Services.insert_port(bodyAddatabase).then(
                              (addPort: any) => {
                                dispatch(act_hide_loading());
                                if (addPort.status === 1) {
                                  dispatch(
                                    act_show_loading(
                                      "Đang tạo liên kết bảng ..."
                                    )
                                  );
                                  Services.add_relation_table(
                                    bodyAddatabase
                                  ).then((addRelationTB: any) => {
                                    dispatch(act_hide_loading());
                                    if (addRelationTB.status === 1) {
                                
                                      dispatch(
                                        act_show_loading("Đang tạo user ...")
                                      );
                                      Services.create_login(
                                        bodyAddatabase
                                      ).then((createLogin: any) => {
                                        dispatch(act_hide_loading());
                                        if (createLogin.status === 1) {
                                    
                                          dispatch(
                                            act_show_loading(
                                              "Đang nối user vào database..."
                                            )
                                          );
                                          Services.map_login_data(
                                            bodyAddatabase
                                          ).then((mapLoginDB: any) => {
                                            dispatch(act_hide_loading());
                                            if (mapLoginDB.status === 1) {
                                        
                                              dispatch(
                                                act_show_loading(
                                                  "Thêm khách hàng vào danh sách..."
                                                )
                                              );
                                              Services.addCustomer(body).then(
                                                (addCustomer: any) => {
                                                  dispatch(act_hide_loading());
                                                  if (
                                                    addCustomer.status === 1
                                                  ) {
                                              
                                                    Services.add_config_database(
                                                      bodyConfig
                                                    ).then((addConfig: any) => {
                                                      if (
                                                        addConfig.status === 1
                                                      ) {
                                                  
                                                        dispatch(func_addDB(addConfig.status))
                                                      } else {
                                                        console.log(
                                                          "Thêm config không thành công"
                                                        );
                                                      }
                                                    });
                                                  } else {
                                                    console.log(
                                                      "Thêm customer không thành công"
                                                    );
                                                  }
                                                }
                                              );
                                            } else {
                                              console.log(
                                                "Nối user vào database không thành công"
                                              );
                                            }
                                          });
                                        } else {
                                          console.log(
                                            "Tạo TK không thành công"
                                          );
                                        }
                                      });
                                    } else {
                                      console.log(
                                        "Tạo liên kết bảng không thành công"
                                      );
                                    }
                                  });
                                } else {
                                  console.log(
                                    "Thêm port vào bảng không thành công"
                                  );
                                }
                              }
                            );
                          } else {
                            console.log(
                              "Thêm thành phố vào bảng không thành công"
                            );
                          }
                        }
                      );
                    } else {
                      console.log("Thêm nước vào bảng không thành công");
                    }
                  }
                );
              } else {
                console.log("Thêm DB vào bảng không thành công");
              }
            });
          } else {
            console.log("Tạo TB không thành công");
          }
        });
      } else {
        console.log("Tạo DB không thành công");
      }
    });
  };
}

export const Action = {
  act_get_list_customer,
  act_alert_success,
  act_change_status,
  act_change_date,
  act_change_NumberUser,
  act_deleteDB,
  act_accCustomerDB,

};
