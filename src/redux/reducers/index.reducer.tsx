import { combineReducers } from "redux";
import rdc_alert from "./alert.reducer";
import rdc_customer from "./customer.reducer";
import rdc_loading from "./loading.reducer";
import rdc_login from "./login.reducer";

export const rootReducer = combineReducers({
  customer: rdc_customer,
  alert: rdc_alert,
  loading: rdc_loading,
  account: rdc_login
});

export type RootState = ReturnType<typeof rootReducer>;
