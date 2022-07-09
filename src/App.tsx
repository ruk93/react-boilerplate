import "reflect-metadata";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import container from "./di/container";
import { observer } from "mobx-react";
import ThemeProvider from "./features/theme/ThemeProvider";
import ConfigurationProvider from "./features/config/containers/ConfigurationProvider";
import HelloWorldContainer from "./features/helloWorld/containers/HelloWorld";

const App = () => {
  return (
    <ConfigurationProvider key="config-provider">
      <ThemeProvider>
        <div data-testid="app">
          <HelloWorldContainer />
        </div>
      </ThemeProvider>
    </ConfigurationProvider>
  );
};

export default observer(App);
