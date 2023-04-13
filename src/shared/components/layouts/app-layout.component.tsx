import { PropsWithChildren } from "react";
import NavBar from "../navbar/navbar";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppLayout;
