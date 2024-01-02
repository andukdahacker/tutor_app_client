import { createContext } from "react";
import { SubjectStore } from "../../find/store/subject_store";
import { ProfileStore } from "../store/profile_store";

interface InitialProfileContext {
  profileStore: ProfileStore;
  subjectStore: SubjectStore;
}

export const ProfileContext = createContext<InitialProfileContext | null>(null);
