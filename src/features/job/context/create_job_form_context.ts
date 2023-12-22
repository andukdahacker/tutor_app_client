import { createContext } from "react";
import { SubjectStore } from "../../find/store/subject_store";
import { CreateSubjectStore } from "../../subject/store/create_subject_store";
import { CreateJobStore } from "../store/create_job_store";

interface CreateJobFormInitialContext {
  subjectStore: SubjectStore;
  createJobStore: CreateJobStore;
  createSubjectStore: CreateSubjectStore;
}
export const CreateJobFormContext =
  createContext<CreateJobFormInitialContext | null>(null);
