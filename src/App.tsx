import "reflect-metadata";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import container from "./di/container";
import { observer } from "mobx-react";

const App = () => {
  return <div data-testid="app"></div>;
};

export default observer(App);
