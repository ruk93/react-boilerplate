import "reflect-metadata";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import container from "./di/container";
import { observer } from "mobx-react";
import ThemeProvider from "./features/theme/ThemeProvider";
import { Button } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider>
      <div data-testid="app">
        <Button>Hello World</Button>
      </div>
    </ThemeProvider>
  );
};

export default observer(App);
