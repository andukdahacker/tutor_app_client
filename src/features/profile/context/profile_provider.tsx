import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { ProfileStore } from "../store/profile_store";
import { ProfileContext } from "./profile_context";

const ProfileProvider = ({ children }: PropsWithChildren) => {
  const profileStore = useRef(proxy(new ProfileStore())).current;
  return (
    <ProfileContext.Provider value={{ profileStore }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
