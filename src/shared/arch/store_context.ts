import { authStore, AuthStore } from "@/modules/auth/auth";
import { createContext } from "react";

interface IStoreContext {
  authStore: AuthStore;
}

export const StoreContext = createContext<IStoreContext>({
  authStore: authStore,
});
