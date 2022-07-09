import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeStoreType } from "../../di/types";
import { ThemeStore } from "../../di/schema";
import container from "../../di/container";
import { observer } from "mobx-react";

const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const themeStore = container.get<ThemeStore>(ThemeStoreType);

  return (
    <MuiThemeProvider theme={themeStore.theme}>{children}</MuiThemeProvider>
  );
};

export default observer(ThemeProvider);
