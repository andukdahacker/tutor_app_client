import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { SubjectStore } from "../../find/store/subject_store";
import { CreateSubjectStore } from "../../subject/store/create_subject_store";
import { CreateJobStore } from "../store/create_job_store";
import { CreateJobFormContext } from "./create_job_form_context";

export const CreateJobFormProvider = ({ children }: PropsWithChildren) => {
  const subjectStore = useRef(proxy(new SubjectStore())).current;
  const createJobStore = useRef(proxy(new CreateJobStore())).current;
  const createSubjectStore = useRef(proxy(new CreateSubjectStore())).current;
  return (
    <CreateJobFormContext.Provider
      value={{ subjectStore, createJobStore, createSubjectStore }}
    >
      {children}
    </CreateJobFormContext.Provider>
  );
};
