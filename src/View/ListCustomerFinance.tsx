import { Breadcrumb, Button, Input, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import { Customer } from "../types";
const { Search } = Input;
function ListCustomerFinance() {
  let history = useHistory();
  const total = useSelector((state: RootState) => state.customer.total);
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer.customers
  );
  console.log(customers);

  const dispatch = useDispatch();
  useEffect(() => {
    getlistcustomer();
  }, []);

  function getlistcustomer() {
    dispatch(Action.act_get_list_customer_finance(1, ""));
  }

  function onUpdate(r: any) {
    history.push("/detail_customer_registed", { id: r.ID });
  }
  function onShowSizeChange(current: number) {
    dispatch(Action.act_get_list_customer_finance(current, ""));
  }
  function getlistcustomerSearch(searchKey: string) {
    dispatch(Action.act_get_list_customer_finance(1, searchKey));
  }

  const columns = [
    {
      title: "Tên Công Ty",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    // {
    //   title: "Địa chỉ",
    //   dataIndex: "Address",
    //   key: "Address",
    // },
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
    // {
    //   title: "Email",
    //   dataIndex: "Email",
    //   key: "Email",
    // },
    // {
    //   title: "Loại KH",
    //   dataIndex: "LoaiKhachHang",
    //   key: "LoaiKhachHang",
    // },
    {
      title: "Tổng tiền",
      dataIndex: "TongTien",
      key: "TongTien",
      render: (TongTien: any) => (
        <>{TongTien?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
      ),
    },
    {
      title: "Đã thanh toán",
      dataIndex: "DaThanhToan",
      key: "DaThanhToan",
      render: (DaThanhToan: any) => (
        <>
          {DaThanhToan?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </>
      ),
    },
    {
      title: "Còn nợ",
      dataIndex: "ConNo",
      key: "ConNo",
      render: (ConNo: any) => (
        <>{ConNo?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
      ),
    },
  ];

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Theo dõi công nợ khách hàng</Breadcrumb.Item>
      </Breadcrumb>
      <div className="input-search">
        <Search
          placeholder="input keyword"
          allowClear
          enterButton="search"
          onSearch={getlistcustomerSearch}
        />
      </div>
      {/* <Link style={{ fontWeight: "bold" }} to="/add_customer">
        <Button style={{ float: "right", marginBottom: "10px", marginTop: "10px" }} type="primary">
          Thêm mới
        </Button>
      </Link> */}
      <div className="site-form-content">
        <Table
          onRow={(r) => ({
            // onMouseEnter: () => updateEdit(r),
            onDoubleClick: () => onUpdate(r),
          })}
          dataSource={customers}
          columns={columns}
          pagination={{ total: total, onChange: onShowSizeChange }}
        />
      </div>
    </div>
  );
}

export default ListCustomerFinance;
