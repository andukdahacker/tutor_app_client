import { createContext } from "react";
import { proxy } from "valtio";
import { AuthStore } from "../../store/auth_store";

export const AuthInitialContext = {
  authStore: proxy(new AuthStore()),
};
export const AuthContext = createContext(AuthInitialContext);
