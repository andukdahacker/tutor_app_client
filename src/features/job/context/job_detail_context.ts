import { createContext } from "react";
import JobDetailStore from "../store/job_detail_store";

interface IJobDetailContext {
  jobDetailStore: JobDetailStore;
}

const JobDetailContext = createContext<IJobDetailContext | null>(null);

export default JobDetailContext;
