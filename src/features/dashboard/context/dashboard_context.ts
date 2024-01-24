import { createContext } from "react";
import DashboardStore from "../store/dashboard_store";
import LearnerJobStore from "../store/learner_job_store";
import TutorAppliedJobStore from "../store/tutor_applied_job_store";
import TutorCurrentJobStore from "../store/tutor_current_job_store";
import TutorDoneJobStore from "../store/tutor_done_job_store";

interface IDashboardContext {
  dashboardStore: DashboardStore;
  learnerJobStore: LearnerJobStore;
  tutorAppliedJobStore: TutorAppliedJobStore;
  tutorCurrentJobStore: TutorCurrentJobStore;
  tutorDoneJobStore: TutorDoneJobStore;
}

const DashboardContext = createContext<IDashboardContext | null>(null);

export default DashboardContext;
