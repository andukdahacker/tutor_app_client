import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { FindStore } from "../../store/find_store";
import { JobStore } from "../../store/job_store";
import { SubjectStore } from "../../store/subject_store";
import { TutorStore } from "../../store/tutor_profile_store";
import { FindContext } from "./FindContext";

export const FindProvider = ({ children }: PropsWithChildren) => {
  const findStore = useRef(proxy(new FindStore())).current;
  const jobStore = useRef(proxy(new JobStore())).current;
  const tutorStore = useRef(proxy(new TutorStore())).current;
  const subjectStore = useRef(proxy(new SubjectStore())).current;
  return (
    <FindContext.Provider
      value={{ findStore, jobStore, tutorStore, subjectStore }}
    >
      {children}
    </FindContext.Provider>
  );
};
