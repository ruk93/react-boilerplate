import { createTheme } from "@mui/material";
import type { ThemeOptions, Theme } from "@mui/material";
import { inject, injectable } from "inversify";
import { action, computed, makeObservable } from "mobx";
import { ConfigStoreType } from "../../../di/types";
import type { ConfigStore } from "../../../di/schema";

export const ThemeStoreType = Symbol.for("ThemeStore");

@injectable()
class ThemeStore {
  private themeOptions: ThemeOptions = {};

  @inject(ConfigStoreType)
  configStore!: ConfigStore;

  constructor() {
    makeObservable(this);
  }

  @computed
  get primaryColor() {
    return this.configStore.config.primaryColor;
  }

  @computed
  get theme(): Theme {
    return createTheme({
      palette: {
        primary: {
          main: this.primaryColor,
        },
      },
      ...this.themeOptions,
    });
  }

  @action
  setThemeOptions(themeOptions: ThemeOptions) {
    this.themeOptions = themeOptions;
  }
}
export default ThemeStore;
