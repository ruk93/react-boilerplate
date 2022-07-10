import { Button, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import container from "../../../di/container";
import {
  ConfigStore,
  NotificationService,
} from "../../../di/schema";
import {
  ConfigStoreType,
  NotificationServiceType,
} from "../../../di/types";
import useTranslation from "../../translations/hooks/useTranslation";

const HelloWorldContainer: React.FC = () => {
  const configStore = container.get<ConfigStore>(ConfigStoreType);
  const notifications = container.get<NotificationService>(
    NotificationServiceType
  );

  const { t, service } = useTranslation();
  return (
    <React.Fragment>
      <Typography>hello world from {configStore.config.name}</Typography>
      <Button
        onClick={() =>
          notifications.success(t("hello-world.toast.success", "Hello World."))
        }
      >
        {t("hello-world.notify-me", "Notify Me")}
      </Button>
      <Typography>
        {t("hello-world,change-language", "Change Language")}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => service.changeLanguage("en")}
      >
        English
      </Button>
      {" "}
      <Button
        variant="outlined"
        onClick={() => service.changeLanguage("de")}
      >
        German
      </Button>
    </React.Fragment>
  );
};

export default observer(HelloWorldContainer);
