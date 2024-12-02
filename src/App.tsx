import { observer } from "mobx-react-lite";
import React from "react";

import { UiComp } from "./components/UiState/UiComp";
import { Viewer3D } from "./components/Viewer/Viewer3D";
import { MainContextProvider } from "./hook/useMainContext";

export const App = observer(() => {
  return <SingleInstanceApp />;
});

export const SingleInstanceApp = observer(() => {
  return (
    <MainContextProvider>
      <UiComp />
      <Viewer3D />
    </MainContextProvider>
  );
});
