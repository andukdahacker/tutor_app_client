import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { AuthStore } from "../../store/auth_store";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const authStore = useRef(proxy(new AuthStore())).current;
  return (
    <AuthContext.Provider value={{ authStore }}>
      {children}
    </AuthContext.Provider>
  );
};
