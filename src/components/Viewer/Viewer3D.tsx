import { observer } from "mobx-react-lite";

import { Camera } from "../Camera/Camera";
import { Canvas3D } from "../Canvas/Canvas3D";
import { Light } from "../Light/Light";

export const Viewer3D = observer(() => {
  return (
    <Canvas3D>
      <Camera />
      <Light />
      {/* mple mesh to view */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas3D>
  );
});
