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

const App = () => {
  return (
    <ConfigurationProvider key="config-provider">
      <ThemeProvider>
        <NotificationProvider>
          <SnackbarUtilsConfigurator />
          <div data-testid="app">
            <HelloWorldContainer />
          </div>
        </NotificationProvider>
      </ThemeProvider>
    </ConfigurationProvider>
  );
};

export default observer(App);
