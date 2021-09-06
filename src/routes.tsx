import React from "react";

const Main = React.lazy(() => import("./View/Main"));
const Main2 = React.lazy(() => import("./View/Main2"));
const Customer = React.lazy(() => import("./View/Customer"));
const InfoCustomer = React.lazy(() => import("./View/InfoCustomer"));
const ListCustomerRegister = React.lazy(() => import("./View/ListCustomer"));
const ExpiredAndStop = React.lazy(() => import("./View/ExpiredAndStop"));
const listcustomerExpired3weeksbefore = React.lazy(() => import("./View/Expired3weeksbefore"));
const ExpiredAndStop2 = React.lazy(() => import("./View/ExpiredAndStop2"));
const listcustomerExpired3weeksbefore2 = React.lazy(() => import("./View/Expired3weeksbefore2"));

const routes = [
  {
    key: "0",
    path: "/listcustomerv1",
    exact: true,
    name: "Danh sách khách hàng V1",
    component: Main,
  },

  {
    key: "0",
    path: "/listcustomerExpired3weeksbefore1",
    exact: true,
    name: "KH sắp hết hạn (trước 3 tuần)",
    component: listcustomerExpired3weeksbefore,
  },
  {
    key: "0",
    path: "/ExpiredAndStop1",
    exact: true,
    name: "KH hết hạn và dừng",
    component: ExpiredAndStop,
  },

  {
    key: "1",
    path: "/listcustomerv2",
    exact: true,
    name: "Danh sách khách hàng V2",
    component: Main2,
  },
  
  {
    key: "1",
    path: "/listcustomerExpired3weeksbefore2",
    exact: true,
    name: "KH sắp hết hạn (trước 3 tuần)",
    component: listcustomerExpired3weeksbefore2,
  },
  {
    key: "1",
    path: "/ExpiredAndStop2",
    exact: true,
    name: "KH hết hạn và dừng",
    component: ExpiredAndStop2,
  },

  {
    key: "2",
    path: "/add_customer",
    exact: true,
    name: "Thêm mới khách hàng",
    component: Customer,
  },

  {
    key: "2",
    path: "/detail_customer",
    exact: true,
    name: "Thông tin khách hàng",
    component: InfoCustomer,
  },

  {
    key: "2",
    path: "/listcustomerRegister",
    exact: true,
    name: "Khách hàng đăng ký",
    component: ListCustomerRegister,
  },


];
export default routes;
