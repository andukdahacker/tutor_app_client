import { createContext } from "react";
import { AuthStore } from "../../store/auth_store";

interface AuthInitialContext {
  authStore: AuthStore;
}
export const AuthContext = createContext<AuthInitialContext | null>(null);
