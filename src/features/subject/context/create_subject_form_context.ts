import { createContext } from "react";
import { proxy } from "valtio";
import { CreateSubjectStore } from "../store/create_subject_store";

export const CreateSubjectFormInitialContext = {
  createSubjectStore: proxy(new CreateSubjectStore()),
};

export const CreateSubjectFormContext = createContext(
  CreateSubjectFormInitialContext
);
