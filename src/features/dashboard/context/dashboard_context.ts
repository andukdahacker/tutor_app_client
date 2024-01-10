import { createContext } from "react";
import DashboardStore from "../store/dashboard_store";

interface IDashboardContext {
  dashboardStore: DashboardStore;
}

const DashboardContext = createContext<IDashboardContext | null>(null);

export default DashboardContext;
