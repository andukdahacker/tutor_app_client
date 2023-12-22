import { createContext } from "react";
import { CreateSubjectStore } from "../store/create_subject_store";

interface CreateSubjectFormInitialContext {
  createSubjectStore: CreateSubjectStore;
}

export const CreateSubjectFormContext =
  createContext<CreateSubjectFormInitialContext | null>(null);
