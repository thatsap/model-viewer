import { CameraControls } from "@react-three/drei";
import { observer } from "mobx-react-lite";
import React from "react";

import { useMainContext } from "../../hook/useMainContext";

export const Camera = observer(() => {
  const { cameraManager } = useMainContext();
  return (
    <CameraControls
      makeDefault
      ref={(camera) => {
        if (camera) {
          cameraManager.setCameraRef(camera);
        }
      }}
    />
  );
});
