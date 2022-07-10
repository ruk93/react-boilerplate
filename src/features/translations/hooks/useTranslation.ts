import { useTranslation as useTranslationOriginal } from "react-i18next";
import type {
  Namespace,
  DefaultNamespace,
  KeyPrefix,
  UseTranslationOptions,
  UseTranslationResponse,
} from "react-i18next";
import container from "../../../di/container";
import { TranslationsService } from "../../../di/schema";
import { TranslationsServiceType } from "../../../di/types";

type TranslationHookType<
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined
> = Omit<
  UseTranslationResponse<N, TKPrefix> & { service: TranslationsService },
  "i18n"
>;

const useTranslation = <
  N extends Namespace = DefaultNamespace,
  TKPrefix extends KeyPrefix<N> = undefined
>(
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): TranslationHookType<N, TKPrefix> => {
  const translationSerivce = container.get<TranslationsService>(
    TranslationsServiceType
  );
  const { i18n, ..._useTranslation } = useTranslationOriginal(ns, options);
  return {
    ..._useTranslation,
    service: translationSerivce,
  } as TranslationHookType<N, TKPrefix>;
};

export default useTranslation;
