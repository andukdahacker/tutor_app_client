import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import DashboardStore from "../store/dashboard_store";
import DashboardContext from "./dashboard_context";

const DashboardProvider = ({ children }: PropsWithChildren) => {
  const dashboardStore = useRef(proxy(new DashboardStore())).current;
  return (
    <DashboardContext.Provider value={{ dashboardStore }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
