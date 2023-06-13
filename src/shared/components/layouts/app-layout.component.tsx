import authStore from "@/modules/auth/stores/auth.store";
import { PropsWithChildren, useEffect } from "react";
import { useSnapshot } from "valtio";
import NavBar from "../navbar/navbar.component";

const AppLayout = ({ children }: PropsWithChildren) => {
  const authState = useSnapshot(authStore);
  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated();
    }

    checkAuth();
  }, []);
  return (
    <>
      <NavBar />

      {children}
    </>
  );
};

export default AppLayout;
