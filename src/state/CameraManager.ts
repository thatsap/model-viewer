import { CameraControls } from "@react-three/drei";
import { makeAutoObservable } from "mobx";

import { StateManager } from "./StateManager";

export class CameraManager {
  private _libState: StateManager;
  private _cameraRef: CameraControls | null = null;
  constructor(libState: StateManager) {
    this._libState = libState;
    makeAutoObservable(this);
  }

  setCameraRef(cameraRef: CameraControls) {
    this._cameraRef = cameraRef;
  }

  get cameraRef() {
    return this._cameraRef;
  }

  get libState() {
    return this._libState;
  }
}
