import { PropsWithChildren } from "react";
import { AuthContext, initialAuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={initialAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};
