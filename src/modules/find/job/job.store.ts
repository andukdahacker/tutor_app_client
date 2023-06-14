import { proxy } from "valtio";

class JobStore {}

export const jobStore = proxy(new JobStore());
