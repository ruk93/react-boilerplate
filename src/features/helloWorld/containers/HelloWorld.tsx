import { Button, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import container from "../../../di/container";
import {
  ConfigStore,
  NotificationService,
  TranslationsService,
} from "../../../di/schema";
import {
  ConfigStoreType,
  NotificationServiceType,
  TranslationsServiceType,
} from "../../../di/types";
import useTranslation from "../../translations/hooks/useTranslation";

const HelloWorldContainer: React.FC = () => {
  const configStore = container.get<ConfigStore>(ConfigStoreType);
  const notifications = container.get<NotificationService>(
    NotificationServiceType
  );
  const translations = container.get<TranslationsService>(
    TranslationsServiceType
  );

  const { t } = useTranslation();
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
        onClick={() => translations.changeLanguage("en")}
      >
        English
      </Button>
      {" "}
      <Button
        variant="outlined"
        onClick={() => translations.changeLanguage("de")}
      >
        German
      </Button>
    </React.Fragment>
  );
};

export default observer(HelloWorldContainer);
