import { observer } from "mobx-react";
import React, { PropsWithChildren, useEffect } from "react";
import container from "../../../di/container";
import type { ConfigStore } from "../../../di/schema";
import { ConfigStoreType } from "../../../di/types";
import ThemeProvider from "../../theme/ThemeProvider";
import { ErrorLoadingConfig, LoadingConfig } from "../components/loaders";
import { ConfigVariant } from "../stores/ConfigStore";

const ConfigurationProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const configStore = container.get<ConfigStore>(ConfigStoreType);

  useEffect(() => {
    const controller = new AbortController();
    configStore.loaded === false &&
      configStore.loadConfig(ConfigVariant.default, controller.signal);
    return () => {
      controller.abort();
    };
  }, [configStore]);

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
