import { observer } from "mobx-react";
import React, { PropsWithChildren, useEffect } from "react";
import container from "../../../di/container";
import type { ConfigStore } from "../../../di/schema";
import { ConfigStoreType } from "../../../di/types";
import { ErrorLoadingConfig, LoadingConfig } from "../components/loaders";
import { ConfigVariant } from "../stores/ConfigStore";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={createTheme()}>{children}</MuiThemeProvider>
    </React.Fragment>
  );
};

const ConfigurationProvider: React.FC<
  PropsWithChildren<{ variant: ConfigVariant }>
> = ({ children, variant }) => {
  const configStore = container.get<ConfigStore>(ConfigStoreType);

  useEffect(() => {
    const controller = new AbortController();
    configStore.loaded === false &&
      configStore.loadConfig(variant, controller.signal);
    return () => {
      controller.abort();
    };
  }, [configStore, variant]);

  if (configStore.error) {
    return (
      <ThemeProvider>
        <ErrorLoadingConfig />
      </ThemeProvider>
    );
  }

  if (!configStore.loaded) {
    return (
      <ThemeProvider>
        <LoadingConfig />
      </ThemeProvider>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default observer(ConfigurationProvider);
