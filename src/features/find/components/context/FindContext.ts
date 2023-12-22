import { createContext } from "react";
import { FindStore } from "../../store/find_store";
import { JobStore } from "../../store/job_store";
import { SubjectStore } from "../../store/subject_store";
import { TutorStore } from "../../store/tutor_profile_store";

interface FindContext {
  findStore: FindStore;
  jobStore: JobStore;
  tutorStore: TutorStore;
  subjectStore: SubjectStore;
}

export const FindContext = createContext<FindContext | null>(null);
