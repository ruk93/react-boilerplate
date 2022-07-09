import { useSnackbar } from "notistack";
import React from "react";
import container from "../../di/container";
import { NotificationServiceType } from "../../di/types";
import { NotificationService } from "../../di/schema";

const SnackbarUtilsConfigurator: React.FC = () => {
  const useSnackbarRef = useSnackbar();
  container
    .get<NotificationService>(NotificationServiceType)
    .attachService(useSnackbarRef);
  return null;
};

export default SnackbarUtilsConfigurator;
