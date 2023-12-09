import { PropsWithChildren, useRef } from "react";
import { AuthContext, AuthInitialContext } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const authStore = useRef(AuthInitialContext.authStore).current;
  return (
    <AuthContext.Provider value={{ authStore }}>
      {children}
    </AuthContext.Provider>
  );
};
