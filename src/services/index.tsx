import { URL, secretKey } from "../assets/data/data";
import axios from "axios";

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

function change_date(req: any){
  let body ={
    secretKey: secretKey,
    expireDate: req.date,
    customerID: req.customerID,
  }
  return axios
    .post(`${URL}/nap/change_expire_date`, body)
    .then((res)=>{
      return res.data;
    })
    .catch((err) => console.log(err));
}

function change_numberUser(req: any){
  let body ={
    secretKey: secretKey,
    customerID: req.customerID,
    dbName: req.dbName,
    username: req.username,
    numberUser: req.numberUser,
    customerName: req.customerName,
  }
  return axios
    .post(`${URL}/nap/change_number_user`, body)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}


function deleteDB(req: any){
  let body={
    secretKey: secretKey,
    dbName: req.dbName,
    username: req.username,
    id: req.id,
  }

  return axios
    .post(`${URL}/nap/delete_db`, body)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}


function addCustomer(req: any){
  let body={
    secretKey: secretKey,
    duration: req.duration,
    customerName: req.customerName,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    numberUser: req.numberUser
  }

  return axios
    .post(`${URL}/nap/add_customer`, body)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));

  
}

function create_database(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/create_db`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_table(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey:secretKey
  }
  return axios
    .post(`${URL}/nap/create_table`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_databse_table(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/add_database_table`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}


function insert_country(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/insert_country`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_city(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/insert_city`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function insert_port(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/insert_port`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function add_relation_table(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/add_relation_table`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function create_login(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  return axios
    .post(`${URL}/nap/create_login`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

function map_login_data(req: any){
  let bodyAddatabase={
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    secretKey: secretKey
  }
  console.log(bodyAddatabase);
  
  return axios
    .post(`${URL}/nap/map_login_data`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}


function add_config_database(req: any){
  let bodyAddatabase={
    secretKey: secretKey,
    dbName: req.dbName,
    username: req.username,
    password: req.password,
    key: req.key,
    customerName: req.customerName,
    numberUser: req.numberUser,
  }
  return axios
    .post(`${URL}/nap/add_config_database`, bodyAddatabase)
    .then((res)=>{
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
}

export const Services = {
  get_list_customer,
  change_status,
  change_date,
  change_numberUser,
  deleteDB,
  addCustomer,
  create_database, 
  create_table,
  add_databse_table,
  insert_city,
  add_relation_table,
  map_login_data,
  insert_country,
  insert_port,
  create_login,
  add_config_database,
};
