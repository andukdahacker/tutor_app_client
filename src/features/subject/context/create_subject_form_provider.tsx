import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { CreateSubjectStore } from "../store/create_subject_store";
import { CreateSubjectFormContext } from "./create_subject_form_context";

const CreateSubjectFormProvider = ({ children }: PropsWithChildren) => {
  const createSubjectStore = useRef(proxy(new CreateSubjectStore())).current;
  return (
    <CreateSubjectFormContext.Provider value={{ createSubjectStore }}>
      {children}
    </CreateSubjectFormContext.Provider>
  );
};

export default CreateSubjectFormProvider;
