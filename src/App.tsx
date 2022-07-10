import "reflect-metadata";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import container from "./di/container";
import { observer } from "mobx-react";
import ThemeProvider from "./features/theme/ThemeProvider";
import ConfigurationProvider from "./features/config/containers/ConfigurationProvider";
import HelloWorldContainer from "./features/helloWorld/containers/HelloWorld";
import NotificationProvider from "./features/notification/NotificationProvider";
import SnackbarUtilsConfigurator from "./features/notification/SnackbarUtilsConfigurator";
import TranslationProvider from "./features/translations/TranslationProvider";
import { ConfigVariant } from "./features/config/stores/ConfigStore";

const App = () => {
  return (
    <ConfigurationProvider variant={ConfigVariant.default} key="config-provider">
      <ThemeProvider>
        <TranslationProvider>
          <NotificationProvider>
            <SnackbarUtilsConfigurator />
            <div data-testid="app">
              <HelloWorldContainer />
            </div>
          </NotificationProvider>
        </TranslationProvider>
      </ThemeProvider>
    </ConfigurationProvider>
  );
};

export default observer(App);
