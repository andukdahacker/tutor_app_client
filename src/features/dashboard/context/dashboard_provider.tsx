import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import DashboardStore from "../store/dashboard_store";
import LearnerJobStore from "../store/learner_job_store";
import DashboardContext from "./dashboard_context";

const DashboardProvider = ({ children }: PropsWithChildren) => {
  const dashboardStore = useRef(proxy(new DashboardStore())).current;
  const learnerJobStore = useRef(proxy(new LearnerJobStore())).current;

  return (
    <DashboardContext.Provider value={{ dashboardStore, learnerJobStore }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
