import { createContext } from "react";
import { proxy } from "valtio";
import { SubjectStore } from "../../find/store/subject_store";
import { CreateSubjectStore } from "../../subject/store/create_subject_store";
import { CreateJobStore } from "../store/create_job_store";

export const CreateJobFormInitialContext = {
  subjectStore: proxy(new SubjectStore()),
  createJobStore: proxy(new CreateJobStore()),
  createSubjectStore: proxy(new CreateSubjectStore()),
};
export const CreateJobFormContext = createContext(CreateJobFormInitialContext);
