import { PropsWithChildren } from "react";
import { FindContext, initialFindContext } from "./FindContext";

export const FindProvider = ({ children }: PropsWithChildren) => {
  return (
    <FindContext.Provider value={initialFindContext}>
      {children}
    </FindContext.Provider>
  );
};
