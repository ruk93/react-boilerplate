import { createTheme } from "@mui/material";
import type { ThemeOptions, Theme } from "@mui/material";
import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

export const ThemeStoreType = Symbol.for("ThemeStore");

@injectable()
class ThemeStore {
  @observable theme!: Theme;

  constructor() {
    makeObservable(this);
    this.generateTheme();
  }

  @action
  generateTheme(themeOptions?: ThemeOptions) {
    this.theme = createTheme(themeOptions);
    return this.theme;
  }
}
export default ThemeStore;
