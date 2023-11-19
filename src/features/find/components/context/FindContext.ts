import { createContext } from "react";
import { proxy } from "valtio";
import { FindStore } from "../../store/find_store";
import { JobStore } from "../../store/job_store";
import { SubjectStore } from "../../store/subject_store";
import { TutorStore } from "../../store/tutor_profile_store";

export const initialFindContext = {
  findStore: proxy(new FindStore()),
  jobStore: proxy(new JobStore()),
  tutorStore: proxy(new TutorStore()),
  subjectStore: proxy(new SubjectStore()),
};

export const FindContext = createContext(initialFindContext);
