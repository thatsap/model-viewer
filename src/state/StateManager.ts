import { makeAutoObservable } from "mobx";

import { CameraManager } from "./CameraManager";

export class StateManager {
  constructor() {
    makeAutoObservable(this);
  }

  private _cameraManager = new CameraManager(this);

  get cameraManager() {
    return this._cameraManager;
  }
}
