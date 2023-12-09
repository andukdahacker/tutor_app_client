import { PropsWithChildren, useRef } from "react";
import {
  CreateJobFormContext,
  CreateJobFormInitialContext,
} from "./create_job_form_context";

export const CreateJobFormProvider = ({ children }: PropsWithChildren) => {
  const subjectStore = useRef(CreateJobFormInitialContext.subjectStore).current;
  const createJobStore = useRef(
    CreateJobFormInitialContext.createJobStore
  ).current;
  const createSubjectStore = useRef(
    CreateJobFormInitialContext.createSubjectStore
  ).current;
  return (
    <CreateJobFormContext.Provider
      value={{ subjectStore, createJobStore, createSubjectStore }}
    >
      {children}
    </CreateJobFormContext.Provider>
  );
};
