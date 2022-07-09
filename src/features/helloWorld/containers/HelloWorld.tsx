import { Button, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import container from "../../../di/container";
import { ConfigStore, NotificationService } from "../../../di/schema";
import { ConfigStoreType, NotificationServiceType } from "../../../di/types";

const HelloWorldContainer: React.FC = () => {
  const configStore = container.get<ConfigStore>(ConfigStoreType);
  const notifications = container.get<NotificationService>(
    NotificationServiceType
  );
  return (
    <React.Fragment>
      <Typography>hello world from {configStore.config.name}</Typography>
      <Button onClick={() => notifications.success("Hello World.")}>
        Notify Me
      </Button>
    </React.Fragment>
  );
};

export default observer(HelloWorldContainer);
