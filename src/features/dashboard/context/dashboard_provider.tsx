import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import DashboardStore from "../store/dashboard_store";
import LearnerJobStore from "../store/learner_job_store";
import TutorAppliedJobStore from "../store/tutor_applied_job_store";
import TutorCurrentJobStore from "../store/tutor_current_job_store";
import TutorDoneJobStore from "../store/tutor_done_job_store";
import DashboardContext from "./dashboard_context";

const DashboardProvider = ({ children }: PropsWithChildren) => {
  const dashboardStore = useRef(proxy(new DashboardStore())).current;
  const learnerJobStore = useRef(proxy(new LearnerJobStore())).current;
  const tutorAppliedJobStore = useRef(
    proxy(new TutorAppliedJobStore())
  ).current;
  const tutorCurrentJobStore = useRef(
    proxy(new TutorCurrentJobStore())
  ).current;
  const tutorDoneJobStore = useRef(proxy(new TutorDoneJobStore())).current;

  return (
    <DashboardContext.Provider
      value={{
        tutorCurrentJobStore,
        tutorDoneJobStore,
        dashboardStore,
        learnerJobStore,
        tutorAppliedJobStore,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
