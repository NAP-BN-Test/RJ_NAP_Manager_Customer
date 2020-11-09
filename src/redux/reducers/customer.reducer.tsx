import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
  GET_LIST_CUSTOMER,
} from "../constants";

const initState = {
  CompanyName: "",
  Status: "",
  DatabaseName: "",
  Username: "",
  NoAccount: "",
  DateEpired: "",
  NoDayUpdate: "",
};

const rdc_customer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      return state;
    case ADD_CUSTOMER:
      return state;
    case EDIT_CUSTOMER:
      return state;
    case DELETE_CUSTOMER:
      return state;
  }
};

export default rdc_customer;
