import { Button, Spinner } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { logOutStore } from "../data/logout.store";

const LogOutButton = () => {
  const logOutState = useSnapshot(logOutStore);

  return (
    <Button onClick={() => logOutStore.logOut()}>
      {logOutState.isLoading ? <Spinner /> : <>Log out</>}
    </Button>
  );
};

export default LogOutButton;
