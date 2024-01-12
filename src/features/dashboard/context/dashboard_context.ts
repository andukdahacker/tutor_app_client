import { createContext } from "react";
import DashboardStore from "../store/dashboard_store";
import LearnerJobStore from "../store/learner_job_store";

interface IDashboardContext {
  dashboardStore: DashboardStore;
  learnerJobStore: LearnerJobStore;
}

const DashboardContext = createContext<IDashboardContext | null>(null);

export default DashboardContext;
