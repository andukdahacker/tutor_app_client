import { PropsWithChildren } from "react";
import {
  CreateSubjectFormContext,
  CreateSubjectFormInitialContext,
} from "./create_subject_form_context";

const CreateSubjectFormProvider = ({ children }: PropsWithChildren) => {
  return (
    <CreateSubjectFormContext.Provider value={CreateSubjectFormInitialContext}>
      {children}
    </CreateSubjectFormContext.Provider>
  );
};

export default CreateSubjectFormProvider;
