import { observer } from "mobx-react-lite";

import { NavBar } from "./NavBar/NavBar";
import { SideBar } from "./SideBar/SideBar";

export const UiComp = observer(() => {
  return (
    <>
      <SideBar />
      <NavBar />
    </>
  );
});
