import { URL, secretKey } from "../assets/data/data";
import axios from "axios";

function login(req: any) {
  let body = {
    secretKey: secretKey,
    username: req.username,
    password: req.password,
  };
  return axios
    .post(`${URL}/nap/login`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_v2(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_register(req: any) {
  let body = {
    secretKey: secretKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_register`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_finance(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_finance`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_preexpired(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_preexpired`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_preexpired_v2(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_preexpired_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_expired(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_expired`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function get_list_customer_expired_v2(req: any) {
  let body = {
    secretKey: secretKey,
    searchKey: req.searchKey,
    page: req.page,
  };
  return axios
    .post(`${URL}/nap/get_list_customer_expired_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function change_status(req: any) {
  let body = {
    secretKey: secretKey,
    status: req.status,
    customerID: req.customerID,
  };
  return axios
    .post(`${URL}/nap/change_status`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function change_status_v2(req: any) {
  let body = {
    secretKey: secretKey,
    status: req.status,
    customerID: req.customerID,
  };
  return axios
    .post(`${URL}/nap/change_status_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function change_date(req: any) {
  let body = {
    secretKey: secretKey,
    expireDate: req.date,
    customerID: req.customerID,
  };
  return axios
    .post(`${URL}/nap/change_expire_date`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function change_date_v2(req: any) {
  let body = {
    secretKey: secretKey,
    expireDate: req.date,
    customerID: req.customerID,
  };
  return axios
    .post(`${URL}/nap/change_expire_date_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function change_numberUser(req: any) {
  let body = {
    secretKey: secretKey,
    customerID: req.customerID,
    dbName: req.dbName,
    username: req.username,
    numberUser: req.numberUser,
    customerName: req.customerName,
  };
  return axios
    .post(`${URL}/nap/change_number_user`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function change_numberUser_v2(req: any) {
  let body = {
    secretKey: secretKey,
    customerID: req.customerID,
    dbName: req.dbName,
    username: req.username,
    numberUser: req.numberUser,
    customerName: req.customerName,
  };
  return axios
    .post(`${URL}/nap/change_number_user_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function deleteDB(req: any) {
  let body = {
    secretKey: secretKey,
    dbName: req.dbName,
    username: req.username,
    id: req.id,
  };

  return axios
    .post(`${URL}/nap/delete_db`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function deleteDB_v2(req: any) {
  let body = {
    secretKey: secretKey,
    dbName: req.dbName,
    username: req.username,
    id: req.id,
  };

  return axios
    .post(`${URL}/nap/delete_db_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function infoCustomer(req: any) {
  let body = {
    secretKey: secretKey,
    id: req.id,
  };

  return axios
    .post(`${URL}/nap/info_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function addCustomer(req: any) {
  let body = {
    secretKey: secretKey,
    duration: req.duration,
    customerName: req.customerName,
    customerCode: req.customerCode,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    numberUser: req.numberUser,
    masothue: req.masothue,
    address: req.address,
    nguoidaidien: req.nguoidaidien,
    phonenumber: req.phonenumber,
    email: req.email,
    loaikhachhang: req.loaikhachhang,
    noAccount: req.noAccount,
    version: req.locyversion,
  };

  console.log(body);
  

  return axios
    .post(`${URL}/nap/add_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
function addCustomer_v2(req: any) {
  let body = {
    secretKey: secretKey,
    duration: req.duration,
    customerName: req.customerName,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    numberUser: req.numberUser,
  };

  return axios
    .post(`${URL}/nap/add_customer_v2`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function editCustomer(req: any) {
  let body = {
    secretKey: secretKey,
    id: req.id,
    duration: req.duration,
    customerName: req.customerName,
    customerCode: req.customerCode,
    key: req.key,
    numberUser: req.numberUser,
    masothue: req.masothue,
    address: req.address,
    nguoidaidien: req.nguoidaidien,
    phonenumber: req.phonenumber,
    email: req.email,
    loaikhachhang: req.loaikhachhang,
    version: req.locyversion,
    tongtien: req.tongtien,
    dathanhtoan: req.dathanhtoan,
  };

  return axios
    .post(`${URL}/nap/edit_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function updateCustomer(req: any) {
  let body = {
    secretKey: secretKey,
    id: req.id,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    tongtien: req.tongtien,
    dathanhtoan: req.dathanhtoan,
  };

  return axios
    .post(`${URL}/nap/update_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_database(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/create_db`, bodyAddatabase)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_database_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/create_db_v2`, bodyAddatabase)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_table(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/create_table`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_table_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/create_table_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_databse_table_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/add_database_table_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_databse_table(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/add_database_table`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_country(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_country`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_country_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_country_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_city(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_city`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_city_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_city_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_port(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_port`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_port_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/insert_port_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_relation_table(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/add_relation_table`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_relation_table_v2(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/add_relation_table_v2`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_login(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  return axios
    .post(`${URL}/nap/create_login`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function map_login_data(req: any) {
  let bodyAddatabase = {
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey,
  };
  console.log(bodyAddatabase);

  return axios
    .post(`${URL}/nap/map_login_data`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_config_database(req: any) {
  let bodyAddatabase = {
    secretKey: secretKey,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    customerName: req.customerName,
    numberUser: req.numberUser,
  };
  return axios
    .post(`${URL}/nap/add_config_database`, bodyAddatabase)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function deleteCustomerRegister(req: any) {
  let body = {
    secretKey: secretKey,
    arrid: req.arrid,
  };

  console.log(body);
  

  return axios
    .post(`${URL}/nap/delete_customer`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function check_mst(req: any) {
  let body = {
    dbName: req.dbName,
    secretKey: secretKey,
    masothue: req.masothue
  };
  console.log(body);

  return axios
    .post(`${URL}/nap/check_mst`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
export const Services = {
  check_mst,
  deleteCustomerRegister,
  login,
  get_list_customer,
  get_list_customer_v2,
  get_list_customer_register,
  get_list_customer_finance,
  get_list_customer_preexpired,
  get_list_customer_preexpired_v2,
  get_list_customer_expired,
  get_list_customer_expired_v2,
  change_status,
  change_status_v2,
  change_date,
  change_date_v2,
  change_numberUser,
  change_numberUser_v2,
  deleteDB,
  deleteDB_v2,
  infoCustomer,
  addCustomer,
  addCustomer_v2,
  editCustomer,
  updateCustomer,
  create_database,
  create_database_v2,
  create_table,
  create_table_v2,
  add_databse_table,
  add_databse_table_v2,
  insert_city,
  insert_city_v2,
  add_relation_table,
  add_relation_table_v2,
  map_login_data,
  insert_country,
  insert_country_v2,
  insert_port,
  insert_port_v2,
  create_login,
  add_config_database,
};
