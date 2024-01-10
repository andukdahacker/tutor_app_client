import { useSnapshot } from "valtio";
import { AuthContext } from "../../features/auth/components/context/AuthContext";
import useStoreContext from "./useStoreContext";

function useUser() {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);

  return user;
}

export default useUser;
