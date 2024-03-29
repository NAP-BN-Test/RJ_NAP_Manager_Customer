import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../redux/actions/index.action";
import EditCustomer from "../Component/Customer/EditCustomer";
import { Account } from "../types";
import { RootState } from "../redux/reducers/index.reducer";

function InfoCustomer() {
  const dispatch = useDispatch();
  // const accounts: Account = useSelector((state: RootState) => state.account);
  async function toggleAddCustomer(
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
    if (localStorage.getItem("permission") == "SALE") {
      dispatch(
        Action.act_edit_customers(
          id,
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
          locyversion,
          tongtien,
          dathanhtoan
        )
      );
    } else if (localStorage.getItem("permission") == "KETOAN") {
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
    } else {
      await dispatch(
        Action.act_edit_customers(
          id,
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
          locyversion,
          tongtien,
          dathanhtoan
        )
      );
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
