import { PropsWithChildren, useRef } from "react";
import { FindContext, initialFindContext } from "./FindContext";

export const FindProvider = ({ children }: PropsWithChildren) => {
  const findStore = useRef(initialFindContext.findStore).current;
  const jobStore = useRef(initialFindContext.jobStore).current;
  const tutorStore = useRef(initialFindContext.tutorStore).current;
  const subjectStore = useRef(initialFindContext.subjectStore).current;
  return (
    <FindContext.Provider
      value={{ findStore, jobStore, tutorStore, subjectStore }}
    >
      {children}
    </FindContext.Provider>
  );
};
