import { Canvas } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import React from "react";

export const Canvas3D: React.FC<{ children?: React.ReactNode }> = observer(
  ({ children }) => {
    return (
      <Canvas gl={{ antialias: true, toneMappingExposure: 0.55 }}>
        {children}
      </Canvas>
    );
  },
);
