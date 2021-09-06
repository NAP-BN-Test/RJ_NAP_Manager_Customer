import { Customer } from "../../types";
import * as constants from "../constants/index";
import { Services } from "../../services/index";
import { genKey } from "../../assets/utils";
import { history } from "../../assets/utils/history";

export interface Get_List_Customer {
  type: constants.GET_LIST_CUSTOMER;
  customer: Customer;
}

export type AUTHENTICATE = Get_List_Customer;

// function gọi đến reducer
function func_get_info_customer(customer: any) {
  return {
    type: constants.GET_INFO_CUSTOMER,
    customers: customer,
  };
}
function func_get_list_customer(customer: any, total: number) {
  return {
    type: constants.GET_LIST_CUSTOMER,
    customers: customer,
    totals: total,
  };
}
function func_get_list_customer_register(customer: any, total: number) {
  return {
    type: constants.GET_LIST_CUSTOMER_REGISTER,
    customers: customer,
    totals: total,
  };
}
function func_change_status(customerId: number, status: boolean) {
  return {
    type: constants.EDIT_STATUS,
    customerId: customerId,
    status: status,
  };
}

function func_edit_date(customerId: number, dateExprired: string) {
  return {
    type: constants.EDIT_DATE,
    customerId: customerId,
    dateExprired: dateExprired,
  };
}

function func_edit_noAccount(customerId: number, noAccount: number) {
  return {
    type: constants.EDIT_NO_ACCOUNT,
    customerId: customerId,
    noAccount: noAccount,
  };
}

function func_delete_DB(customerId: number) {
  return {
    type: constants.DELETE_CUSTOMER,
    customerId: customerId,
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

// action xử lý
function act_get_list_customer(searchKey: string, pageNumber: number) {
  return (dispatch: any) => {
    let body = {
      searchKey: searchKey,
      page: pageNumber,
    };
    Services.get_list_customer(body).then(async (res) => {
      if (res.status === 1) {
        let customers = res.array;
        let total = res.total;
        dispatch(func_get_list_customer(customers, total));
        // dispatch(act_alert_success("Lấy dữ liệu thành công!"));
      } else {
        dispatch(act_alert_error("Lấy dữ liệu thất bại!"));
      }
    });
  };
}
function act_get_list_customer2(searchKey: string, pageNumber: number) {
  return (dispatch: any) => {
    let body = {
      searchKey: searchKey,
      page: pageNumber,
    };
    Services.get_list_customer_v2(body).then(async (res) => {
      if (res.status === 1) {
        let customers = res.array;
        let total = res.total;
        dispatch(func_get_list_customer(customers, total));
        // dispatch(act_alert_success("Lấy dữ liệu thành công!"));
      } else {
        dispatch(act_alert_error("Lấy dữ liệu thất bại!"));
      }
    });
  };
}
function act_get_list_customer_register(pageNumber: number) {
  let body = {
    page: pageNumber,
  };
  return (dispatch: any) => {
    Services.get_list_customer_register(body).then(async (res) => {
      if (res.status === 1) {
        console.log(res);
        
        let customers = res.array;
        let total = res.total;
        dispatch(func_get_list_customer_register(customers, total));
        // dispatch(act_alert_success("Lấy dữ liệu thành công!"));
      } else {
        dispatch(act_alert_error("Lấy dữ liệu thất bại!"));
      }
    });
  };
}

function act_change_status(customerID: number, status: boolean) {
  console.log(status);

  return (dispatch: any) => {
    let body = {
      customerID: customerID,
      status: status ? false : true,
    };
    Services.change_status_v2(body).then(async (res) => {
      if (res.status === 1) {
        dispatch(func_change_status(customerID, body.status));
        dispatch(act_alert_success("Đổi trạng thái thành công!"));
      } else {
        dispatch(act_alert_error("Đổi trạng thái thất bại!"));
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
    Services.change_date_v2(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_edit_date(CustomerID, body.date));
        dispatch(act_alert_success("Đổi ngày hết hạn thành công!"));
      } else {
        dispatch(act_alert_error("Thay đổi ngày hết hạn không thành công!"));
      }
    });
  };
}

function act_change_noAccount(
  customerID: number,
  dbName: string,
  username: string,
  noAccount: number,
  customerName: string
) {
  return (dispatch: any) => {
    let body = {
      customerID: customerID,
      dbName: dbName,
      username: username,
      numberUser: noAccount,
      customerName: customerName,
    };

    Services.change_numberUser_v2(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_edit_noAccount(customerID, noAccount));
        dispatch(act_alert_success("Sửa số lượng User thành công!"));
      } else {
        console.log("Sửa số lượng user không thành công");
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

    Services.deleteDB_v2(body).then((res: any) => {
      if (res.status === 1) {
        dispatch(func_delete_DB(id));
        dispatch(act_alert_success("Xoá database thành công!"));
        // window.location.reload();
      } else {
        console.log("Xóa database không thành công");
      }
    });
  };
}
function act_login(username: string, password: string) {
  return(dispatch: any)=>{
    localStorage.setItem("user", JSON.stringify({
      userinfo: {
        name: '',
      },
      accesstoken: '11111111',
      permisson: '',
    }))
    
  }
}

// lấy thông tin khách hàng
function act_get_info_customers(id: number) {
  return (dispatch: any) => {
    let body = {
      id: id,
      key: genKey(),
    };
    Services.infoCustomer(body).then((infoCustomer: any) => {
      console.log(infoCustomer);
      if (infoCustomer.status === 1) {
        dispatch(func_get_info_customer(infoCustomer.infoCustomer))
      }else{
        dispatch(act_alert_error("Thêm dữ liệu không thành công!"));
      }
    });
  };
}

// nút save
function act_add_customers(
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
) {
  return (dispatch: any) => {
    let body = {
      customerName: customerName,
      customerCode: customerCode,
      masothue: masothue,
      address: address,
      nguoidaidien: nguoidaidien,
      phonenumber: phonenumber,
      email: email,
      loaikhachhang: loaikhachhang,
      duration: duration,
      numberUser: numberUser,
      locyversion: locyversion,
      key: genKey(),
    };
    dispatch(act_show_loading("Đang tạo tên Database ..."));
    Services.addCustomer(body).then((addCustomer: any) => {
      console.log(addCustomer);
      
      dispatch(act_hide_loading());
      if (addCustomer.status === 1) {
        // console.log("Thêm dữ liệu thành công");
        dispatch(act_alert_success("Thêm dữ liệu thành công!"));
      }else{
        dispatch(act_alert_error("Thêm dữ liệu không thành công!"));
      }
    });
  };
}

// nút submit
function act_add_customersDB(
  customerName: string,
  dbName: string,
  duration: string,
  numberUser: number,
  username: string,
  password: string
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
    //   dispatch(act_show_loading("Đang tạo tên Database ..."));
    //   Services.create_database(bodyAddatabase).then((createDB: any) => {
    //     dispatch(act_hide_loading());
    //     if (createDB.status === 1) {
    //       dispatch(act_show_loading("Đang tạo bảng ..."));
    //       Services.create_table(bodyAddatabase).then((createTB: any) => {
    //         console.log(createTB);

    //         dispatch(act_hide_loading());
    //         if (createTB.status === 1) {
    //           dispatch(act_show_loading("Đang thêm database vào bảng ..."));
    //           Services.add_databse_table(bodyAddatabase).then((addDB: any) => {
    //             dispatch(act_hide_loading());
    //             if (addDB.status === 1) {
    //               dispatch(act_show_loading("Đang thêm nước vào bảng ..."));
    //               Services.insert_country(bodyAddatabase).then(
    //                 (addCountry: any) => {
    //                   dispatch(act_hide_loading());
    //                   if (addCountry.status === 1) {
    //                     dispatch(act_show_loading("Đang thêm city vào bảng ..."));
    //                     Services.insert_city(bodyAddatabase).then(
    //                       (addCity: any) => {
    //                         dispatch(act_hide_loading());
    //                         if (addCity.status === 1) {
    //                           dispatch(
    //                             act_show_loading("Đang thêm port vào bảng ...")
    //                           );
    //                           Services.insert_port(bodyAddatabase).then(
    //                             (addPort: any) => {
    //                               dispatch(act_hide_loading());
    //                               if (addPort.status === 1) {
    //                                 dispatch(
    //                                   act_show_loading(
    //                                     "Đang tạo liên kết bảng ..."
    //                                   )
    //                                 );
    //                                 Services.add_relation_table(
    //                                   bodyAddatabase
    //                                 ).then((addRelationTB: any) => {
    //                                   dispatch(act_hide_loading());
    //                                   if (addRelationTB.status === 1) {
    //                                     dispatch(
    //                                       act_show_loading("Đang tạo user ...")
    //                                     );
    //                                     Services.create_login(
    //                                       bodyAddatabase
    //                                     ).then((createLogin: any) => {
    //                                       dispatch(act_hide_loading());
    //                                       if (createLogin.status === 1) {
    //                                         dispatch(
    //                                           act_show_loading(
    //                                             "Đang nối user vào database..."
    //                                           )
    //                                         );
    //                                         Services.map_login_data(
    //                                           bodyAddatabase
    //                                         ).then((mapLoginDB: any) => {
    //                                           dispatch(act_hide_loading());
    //                                           if (mapLoginDB.status === 1) {
    //                                             dispatch(
    //                                               act_show_loading(
    //                                                 "Thêm khách hàng vào danh sách..."
    //                                               )
    //                                             );
    //                                             Services.addCustomer(body).then(
    //                                               (addCustomer: any) => {
    //                                                 dispatch(act_hide_loading());
    //                                                 if (
    //                                                   addCustomer.status === 1
    //                                                 ) {
    //                                                   Services.add_config_database(
    //                                                     bodyConfig
    //                                                   ).then((addConfig: any) => {
    //                                                     if (
    //                                                       addConfig.status === 1
    //                                                     ) {
    //                                                       history.push("/main");
    //                                                     } else {
    //                                                       console.log(
    //                                                         "Thêm config không thành công"
    //                                                       );
    //                                                     }
    //                                                   });
    //                                                 } else {
    //                                                   console.log(
    //                                                     "Thêm customer không thành công"
    //                                                   );
    //                                                 }
    //                                               }
    //                                             );
    //                                           } else {
    //                                             console.log(
    //                                               "Nối user vào database không thành công"
    //                                             );
    //                                           }
    //                                         });
    //                                       } else {
    //                                         console.log(
    //                                           "Tạo TK không thành công"
    //                                         );
    //                                       }
    //                                     });
    //                                   } else {
    //                                     console.log(
    //                                       "Tạo liên kết bảng không thành công"
    //                                     );
    //                                   }
    //                                 });
    //                               } else {
    //                                 console.log(
    //                                   "Thêm port vào bảng không thành công"
    //                                 );
    //                               }
    //                             }
    //                           );
    //                         } else {
    //                           console.log(
    //                             "Thêm thành phố vào bảng không thành công"
    //                           );
    //                         }
    //                       }
    //                     );
    //                   } else {
    //                     console.log("Thêm nước vào bảng không thành công");
    //                   }
    //                 }
    //               );
    //             } else {
    //               console.log("Thêm DB vào bảng không thành công");
    //             }
    //           });
    //         } else {
    //           console.log("Tạo TB không thành công");
    //         }
    //       });
    //     } else {
    //       console.log("Tạo DB không thành công");
    //     }
    //   });
    // };
    dispatch(act_show_loading("Đang tạo tên Database ..."));
    Services.create_database_v2(bodyAddatabase).then((createDB: any) => {
      dispatch(act_hide_loading());
      if (createDB.status === 1) {
        dispatch(act_show_loading("Đang tạo bảng ..."));
        Services.create_table_v2(bodyAddatabase).then((createTB: any) => {
          console.log(createTB);

          dispatch(act_hide_loading());
          if (createTB.status === 1) {
            dispatch(act_show_loading("Đang thêm database vào bảng ..."));
            Services.add_databse_table_v2(bodyAddatabase).then((addDB: any) => {
              dispatch(act_hide_loading());
              if (addDB.status === 1) {
                dispatch(act_show_loading("Đang thêm nước vào bảng ..."));
                Services.insert_country_v2(bodyAddatabase).then(
                  (addCountry: any) => {
                    dispatch(act_hide_loading());
                    if (addCountry.status === 1) {
                      dispatch(act_show_loading("Đang thêm city vào bảng ..."));
                      Services.insert_city_v2(bodyAddatabase).then(
                        (addCity: any) => {
                          dispatch(act_hide_loading());
                          if (addCity.status === 1) {
                            dispatch(
                              act_show_loading("Đang thêm port vào bảng ...")
                            );
                            Services.insert_port_v2(bodyAddatabase).then(
                              (addPort: any) => {
                                dispatch(act_hide_loading());
                                if (addPort.status === 1) {
                                  dispatch(
                                    act_show_loading(
                                      "Đang tạo liên kết bảng ..."
                                    )
                                  );
                                  Services.add_relation_table_v2(
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
                                              Services.addCustomer_v2(
                                                body
                                              ).then((addCustomer: any) => {
                                                dispatch(act_hide_loading());
                                                if (addCustomer.status === 1) {
                                                  Services.add_config_database(
                                                    bodyConfig
                                                  ).then((addConfig: any) => {
                                                    if (
                                                      addConfig.status === 1
                                                    ) {
                                                      history.push(
                                                        "/listcustomerv1"
                                                      );
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
                                              });
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
  act_get_list_customer2,
  act_get_list_customer_register,
  act_change_status,
  act_change_date,
  act_change_noAccount,
  act_deleteDB,
  act_get_info_customers,
  act_add_customersDB,
  act_add_customers,
  act_login
};
