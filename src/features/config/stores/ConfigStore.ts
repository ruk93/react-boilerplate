import { inject, injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import type { Config } from "../schema";
import { ApiServiceType } from "../../../di/types";
import type { ApiService } from "../../../di/schema";

export const ConfigStoreType = Symbol.for("ConfigStore");

export enum ConfigVariant {
  default = "default",
}

@injectable()
class ConfigStore {
  @observable loaded: boolean = false;
  @observable error: boolean = false;
  @observable config!: Config;

  @inject<ApiService>(ApiServiceType)
  apiService!: ApiService;

  constructor() {
    makeObservable(this);
  }

  @action
  async loadConfig(
    variant: ConfigVariant = ConfigVariant.default,
    signal?: AbortSignal
  ) {
    try {
      const response = await this.apiService.get<Config>(
        `/configs/${variant}.config.json`,
        {
          signal,
        }
      );
      this.setLoaded(true);
      this.setError(false);
      this.config = response.data;
    } catch (e) {
      this.setError(true);
      this.setLoaded(false);
    }
  }

  @action setLoaded(action: boolean) {
    this.loaded = action;
  }

  @action
  setError(action: boolean) {
    this.error = action;
  }
}
export default ConfigStore;
