import { useTranslation as useTranslationOriginal } from "react-i18next";
import type {
  Namespace,
  DefaultNamespace,
  KeyPrefix,
  UseTranslationOptions,
  UseTranslationResponse,
} from "react-i18next";

const useTranslation = <
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined
>(
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): UseTranslationResponse<N, TKPrefix> => {
  return useTranslationOriginal(ns, options);
};

export default useTranslation;
