import "reflect-metadata";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import container from "./di/container";
import { observer } from "mobx-react";
import ThemeProvider from "./features/theme/ThemeProvider";
import { Button } from "@mui/material";
import ConfigurationProvider from "./features/config/containers/ConfigurationProvider";

const App = () => {
  return (
    <ConfigurationProvider key="config-provider">
    <ThemeProvider>
      <div data-testid="app">
        <Button>Hello World</Button>
      </div>
    </ThemeProvider>
    </ConfigurationProvider>
  );
};

export default observer(App);
