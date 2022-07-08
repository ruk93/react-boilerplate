import React, { HTMLAttributes } from "react";
import { Alert, styled } from "@mui/material";
const LoadingConfigWrapper = styled("div")(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    zIndex: 100000
  };
});

export const LoadingConfig: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <LoadingConfigWrapper {...props}>
      <Alert severity="info">Loading Configurations</Alert>
    </LoadingConfigWrapper>
  );
};

export const ErrorLoadingConfig: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <LoadingConfigWrapper {...props}>
      <Alert severity="error">Error Loading Configurations</Alert>
    </LoadingConfigWrapper>
  );
};