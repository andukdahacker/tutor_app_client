import { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { useSnapshot } from "valtio";
import { AuthContext } from "../features/auth/components/context/AuthContext";
import { AuthProvider } from "../features/auth/components/context/AuthProvider";
import NavBar from "../shared/components/navbar/NavBar";

const Root = () => {
  const { authStore } = useContext(AuthContext);
  const { isAuthenticated } = useSnapshot(authStore);

  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated();
    }

    checkAuth();
  }, []);
  return (
    <AuthProvider>
      <NavBar isAuthenticated={isAuthenticated} />
      <Outlet />
    </AuthProvider>
  );
};

export default Root;
