import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import JobDetailStore from "../store/job_detail_store";
import JobDetailContext from "./job_detail_context";

const JobDetailProvider = ({ children }: PropsWithChildren) => {
  const jobDetailStore = useRef(proxy(new JobDetailStore())).current;
  return (
    <JobDetailContext.Provider value={{ jobDetailStore }}>
      {children}
    </JobDetailContext.Provider>
  );
};

export default JobDetailProvider;
