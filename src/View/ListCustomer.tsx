import { Breadcrumb, Button, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function ListCustomer() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      address: "10 Downing Street",
      MST: "1",
      Email: "1",
      SDT: "0333968999",
      daidien: "Dũng",
      conno: "1000000",
      dathanhtoan: "199900000",
      tongtien: "2000000000",
    },
    {
      key: "2",
      name: "John",
      address: "10 Downing Street",
      MST: "1",
      Email: "1",
      SDT: "0333968999",
      daidien: "Dũng",
      conno: "1000000",
      dathanhtoan: "199900000",
      tongtien: "2000000000",
    },
  ];

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "MST",
      dataIndex: "MST",
      key: "MST",
    },
    {
      title: "Đại điện",
      dataIndex: "daidien",
      key: "daidien",
    },
    {
      title: "Số điện thoại",
      dataIndex: "SDT",
      key: "SDT",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Loại KH",
      dataIndex: "LoaiKH",
      key: "LoaiKH",
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongtien",
      key: "tongtien",
      render: (tongtien: any) => (
        <>{tongtien?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
      ),
    },
    {
      title: "Đã thanh toán",
      dataIndex: "dathanhtoan",
      key: "dathanhtoan",
      render: (dathanhtoan: any) => (
        <>
          {dathanhtoan?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </>
      ),
    },
    {
      title: "Còn nợ",
      dataIndex: "conno",
      key: "conno",
      render: (conno: any) => (
        <>{conno?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
      ),
    },
  ];

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách khách hàng đăng ký</Breadcrumb.Item>
      </Breadcrumb>
      <Link style={{ fontWeight: "bold" }} to="/add_customer">
        <Button style={{ float: "right", marginBottom: '10px' }} type="primary">
          Thêm mới
        </Button>
      </Link>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default ListCustomer;
