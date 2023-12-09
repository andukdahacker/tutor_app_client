import { PropsWithChildren, useRef } from "react";
import {
  CreateSubjectFormContext,
  CreateSubjectFormInitialContext,
} from "./create_subject_form_context";

const CreateSubjectFormProvider = ({ children }: PropsWithChildren) => {
  const createSubjectStore = useRef(
    CreateSubjectFormInitialContext.createSubjectStore
  ).current;
  return (
    <CreateSubjectFormContext.Provider value={{ createSubjectStore }}>
      {children}
    </CreateSubjectFormContext.Provider>
  );
};

export default CreateSubjectFormProvider;
