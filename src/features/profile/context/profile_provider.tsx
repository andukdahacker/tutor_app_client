import { PropsWithChildren, useRef } from "react";
import { proxy } from "valtio";
import { SubjectStore } from "../../find/store/subject_store";
import { ProfileStore } from "../store/profile_store";
import { ProfileContext } from "./profile_context";

const ProfileProvider = ({ children }: PropsWithChildren) => {
  const profileStore = useRef(proxy(new ProfileStore())).current;
  const subjectStore = useRef(proxy(new SubjectStore())).current;
  return (
    <ProfileContext.Provider value={{ profileStore, subjectStore }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
