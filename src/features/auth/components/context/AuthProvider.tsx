import { PropsWithChildren } from "react";
import { AuthContext, AuthInitialContext } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={AuthInitialContext}>
      {children}
    </AuthContext.Provider>
  );
};
