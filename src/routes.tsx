import React from "react";

const Main = React.lazy(() => import("./View/Main"));
const Customer = React.lazy(() => import("./View/Customer"));

const routes = [
  {
    key: "0",
    path: "/main",
    exact: true,
    name: "Danh sách khách hàng",
    component: Main,
  },
  {
    key: "1",
    path: "/add_customer",
    exact: true,
    name: "Thêm mới khách hàng",
    component: Customer,
  },
];
export default routes;
