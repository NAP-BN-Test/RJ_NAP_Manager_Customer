import React from "react";
import { useDispatch } from "react-redux";
import { Action } from "../redux/actions/index.action";
import EditCustomer from "../Component/Customer/EditCustomer";

function InfoCustomer() {
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
    locyversion: number,
    tongtien: number,
    dathanhtoan: number
  ) {
    dispatch(
      Action.act_add_customersDB(
        id,
        customerName,
        customerCode,
        duration,
        numberUser,
        customerCode,
        phonenumber,
        locyversion,
        tongtien,
        dathanhtoan
      )
    );
  }
  return (
    <div className="site-layout-content">
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-form-content">
        <EditCustomer toggleAddCustomer={toggleAddCustomer} />
      </div>
    </div>
  );
}

export default InfoCustomer;
