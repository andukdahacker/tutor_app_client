import { PropsWithChildren } from "react";
import NavBar from "../navbar/navbar.component";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppLayout;
