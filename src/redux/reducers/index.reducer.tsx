import { combineReducers } from "redux";
import rdc_alert from "./alert.reducer";
import rdc_customer from "./customer.reducer";
import rdc_loading from "./loading.reducer";

export const rootReducer = combineReducers({
  customer: rdc_customer,
  alert: rdc_alert,
  loading: rdc_loading
});

export type RootState = ReturnType<typeof rootReducer>;
