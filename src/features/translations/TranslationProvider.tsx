import React, { PropsWithChildren } from "react";
import container from "../../di/container";
import TranslationsService, {
  TranslationsServiceType,
} from "./TranslationsService";

const TranslationProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  container.get<TranslationsService>(TranslationsServiceType).init();
  return <React.Fragment>{children}</React.Fragment>;
};

export default TranslationProvider;
