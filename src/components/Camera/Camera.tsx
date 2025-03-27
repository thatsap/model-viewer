import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useMainContext } from "../../hook/useMainContext";

export const Camera = observer(() => {
  const { cameraManager } = useMainContext();
  const controlsRef = useRef(null);
  const [isInside, setIsInside] = useState(true);
  const bound = new THREE.Box3(
    new THREE.Vector3(-20, -20, -20),
    new THREE.Vector3(20, 20, 20)
  );
  const { raycaster } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      const initialPos = new THREE.Vector3(0, 0, 4);
      controlsRef.current.camera.position.copy(initialPos);
      controlsRef.current.camera.updateProjectionMatrix();
    }
  }, []);

  const handleCameraCheck = () => {
    const camera = cameraManager.cameraRef?.camera;
    const controls = cameraManager.cameraRef;
    if (!controls || !camera) return;
    cameraManager.cameraRef.setBoundary(bound);

    // Get camera position and target
    let cameraPos = camera.position.clone();
    let target = new THREE.Vector3();
    controls.getTarget(target);

    // Clamp position inside bounding box
    cameraPos.x = THREE.MathUtils.clamp(cameraPos.x, bound.min.x, bound.max.x);
    cameraPos.y = THREE.MathUtils.clamp(cameraPos.y, bound.min.y, bound.max.y);
    cameraPos.z = THREE.MathUtils.clamp(cameraPos.z, bound.min.z, bound.max.z);

    // If camera is outside, move it back inside smoothly
    if (!bound.containsPoint(camera.position)) {
      camera.position.lerp(cameraPos, 0.2);
      controls.setLookAt(cameraPos.x, cameraPos.y, cameraPos.z, target.x, target.y, target.z, false);
      setIsInside(false);
    } else {
      console.log("inside")
      setIsInside(true);
    }
  };

  return (
    <CameraControls
      ref={(ref) => {
        controlsRef.current = ref;
        if (ref) cameraManager.setCameraRef(ref);
      }}
      makeDefault
      dollyToCursor={isInside}
      zoomSpeed={2}
      onChange={handleCameraCheck}
    />
  );
});
