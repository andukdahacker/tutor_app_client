import { PropsWithChildren } from "react";
import {
  CreateJobFormContext,
  CreateJobFormInitialContext,
} from "./create_job_form_context";

export const CreateJobFormProvider = ({ children }: PropsWithChildren) => {
  return (
    <CreateJobFormContext.Provider value={CreateJobFormInitialContext}>
      {children}
    </CreateJobFormContext.Provider>
  );
};
