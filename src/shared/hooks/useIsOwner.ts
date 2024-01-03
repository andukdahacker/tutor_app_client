import { AuthContext } from "../../features/auth/components/context/AuthContext";
import useStoreContext from "./useStoreContext";

function useIsOwner(userId: string) {
  const { authStore } = useStoreContext(AuthContext);

  return authStore.user?.id == userId;
}

export default useIsOwner;
