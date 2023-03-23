import { AuthStore } from "@/modules/auth/auth";
import { AuthService } from "@/modules/auth/data/auth.service";
import { createContext } from "react";

interface IStoreContext {
  authStore: AuthStore;
}

export const StoreContext = createContext<IStoreContext>({
  authStore: new AuthStore(new AuthService()),
});
