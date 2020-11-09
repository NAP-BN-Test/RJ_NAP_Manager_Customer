import { combineReducers } from "redux";
import rdc_customer from "./customer.reducer";

export const rootReducer = combineReducers({
  customer: rdc_customer,
});

export type RootState = ReturnType<typeof rootReducer>;
