import { createContext } from "react";
import { ProfileStore } from "../store/profile_store";

interface InitialProfileContext {
  profileStore: ProfileStore;
}

export const ProfileContext = createContext<InitialProfileContext | null>(null);
