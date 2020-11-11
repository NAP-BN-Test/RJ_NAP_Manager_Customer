import { combineReducers } from "redux";
import rdc_alert from "./alert.reducer";
import rdc_customer from "./customer.reducer";

export const rootReducer = combineReducers({
  customer: rdc_customer,
  alert: rdc_alert
});

export type RootState = ReturnType<typeof rootReducer>;
