import React from "react";

const Main = React.lazy(() => import("./View/Main"));
const Main2 = React.lazy(() => import("./View/Main2"));
const Customer = React.lazy(() => import("./View/Customer"));

const routes = [
  {
    key: "0",
    path: "/listcustomerv1",
    exact: true,
    name: "Danh sách khách hàng V1",
    component: Main,
  },
  {
    key: "1",
    path: "/listcustomerv2",
    exact: true,
    name: "Danh sách khách hàng V2",
    component: Main2,
  },
  {
    key: "2",
    path: "/add_customer",
    exact: true,
    name: "Thêm mới khách hàng",
    component: Customer,
  },
];
export default routes;
