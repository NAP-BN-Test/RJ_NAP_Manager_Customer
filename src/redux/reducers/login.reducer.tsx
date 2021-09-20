import { notification } from "antd";
import { Account } from "../../types";
import { LOGIN } from "../constants";

const initState: Account = {
  id: null,
  username: null,
  password: null,
  permission: null,
};

function rdc_login(state = initState, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        id: action.accounts.ID,
        username: action.accounts.Username,
        password: action.accounts.Password,
        permission: action.accounts.Permission,
      };
    default:
      return state;
  }
}

export default rdc_login;
