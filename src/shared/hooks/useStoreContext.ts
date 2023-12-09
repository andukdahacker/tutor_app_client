import { useContext } from "react";

function useStoreContext<T>(context: React.Context<T>) {
  const storeContext = useContext(context);

  if (!storeContext) throw Error("Cannot get store context");

  return storeContext;
}

export default useStoreContext;
