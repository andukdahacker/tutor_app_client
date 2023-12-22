import { useEffect } from "react";
import { Outlet } from "react-router";
import { useSnapshot } from "valtio";

import { AuthContext } from "../features/auth/components/context/AuthContext";
import NavBar from "../shared/components/navbar/NavBar";
import useStoreContext from "../shared/hooks/useStoreContext";

const Root = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { isAuthenticated } = useSnapshot(authStore);

  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated();
    }

    checkAuth();
  }, []);
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <Outlet />
    </>
  );
};

export default Root;
