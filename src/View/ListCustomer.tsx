import { Breadcrumb, Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import { Customer } from "../types";

function ListCustomer() {
  let history = useHistory();

  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer.customers
  );
  console.log(customers);

  const dispatch = useDispatch();
  useEffect(() => {
    getlistcustomer();
  }, []);

  function getlistcustomer() {
    dispatch(Action.act_get_list_customer_register(1));
  }

  function onUpdate(r: any) {
    history.push("/detail_customer",
      {id: r.ID});
  }

  const columns = [
    {
      title: "Tên Công Ty",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "MST",
      dataIndex: "MaSoThue",
      key: "MaSoThue",
    },
    {
      title: "Đại điện",
      dataIndex: "NguoiDaiDien",
      key: "NguoiDaiDien",
    },
    {
      title: "Số điện thoại",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Loại KH",
      dataIndex: "LoaiKhachHang",
      key: "LoaiKhachHang",
    },
    // {
    //   title: "Tổng tiền",
    //   dataIndex: "tongtien",
    //   key: "tongtien",
    //   render: (tongtien: any) => (
    //     <>{tongtien?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
    //   ),
    // },
    // {
    //   title: "Đã thanh toán",
    //   dataIndex: "dathanhtoan",
    //   key: "dathanhtoan",
    //   render: (dathanhtoan: any) => (
    //     <>
    //       {dathanhtoan?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
    //     </>
    //   ),
    // },
    // {
    //   title: "Còn nợ",
    //   dataIndex: "conno",
    //   key: "conno",
    //   render: (conno: any) => (
    //     <>{conno?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
    //   ),
    // },
  ];

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách khách hàng đăng ký</Breadcrumb.Item>
      </Breadcrumb>
      <Link style={{ fontWeight: "bold" }} to="/add_customer">
        <Button style={{ float: "right", marginBottom: "10px" }} type="primary">
          Thêm mới
        </Button>
      </Link>

      <Table
        onRow={(r) => ({
          // onMouseEnter: () => updateEdit(r),
          onDoubleClick: () => onUpdate(r),
        })}
        dataSource={customers}
        columns={columns}
      />
    </div>
  );
}

export default ListCustomer;
