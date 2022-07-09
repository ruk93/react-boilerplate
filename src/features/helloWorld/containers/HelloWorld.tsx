import { observer } from "mobx-react";
import React from "react";
import container from "../../../di/container";
import { ConfigStore } from "../../../di/schema";
import { ConfigStoreType } from "../../../di/types";

const HelloWorldContainer: React.FC = () => {

  const configStore = container.get<ConfigStore>(ConfigStoreType);

  return <React.Fragment>hello world from {configStore.config.name}</React.Fragment>;
};

export default observer(HelloWorldContainer);
