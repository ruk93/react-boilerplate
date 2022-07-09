import { SnackbarProvider } from "notistack";
import React, { PropsWithChildren } from "react";

const NotificationProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
    </React.Fragment>
  );
};

export default NotificationProvider;
