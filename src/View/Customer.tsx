import React from "react";
import { Breadcrumb } from "antd";
import AddCustomer from "../Component/Customer/AddCustomer";
import { useDispatch } from "react-redux";
import { Action } from "../redux/actions/index.action";

function Customer() {
  const dispatch = useDispatch();

  function toggleAddCustomer(
    id: any,
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
    dispatch(
      Action.act_check_mst({
        customerName,
        customerCode,
        masothue,
        address,
        nguoidaidien,
        phonenumber,
        email,
        loaikhachhang,
        duration,
        numberUser,
        locyversion
      })
    );
    // dispatch(
    //   Action.act_add_customers(
    //     customerName,
    //     customerCode,
    //     masothue,
    //     address,
    //     nguoidaidien,
    //     phonenumber,
    //     email,
    //     loaikhachhang,
    //     duration,
    //     numberUser,
    //     locyversion
    //   )
    // );
  }
  return (
    <div className="site-layout-content">
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-form-content">
        <AddCustomer toggleAddCustomer={toggleAddCustomer} />
      </div>
    </div>
  );
}

export default Customer;
