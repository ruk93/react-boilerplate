import { injectable } from "inversify";
import type {
  ProviderContext,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey,
  VariantType,
} from "notistack";
export const NotificationServiceType = Symbol.for("NotificationService");

@injectable()
class NotificationService {
  notifications?: ProviderContext;

  attachService(service: ProviderContext) {
    this.notifications = service;
  }

  toast(message: SnackbarMessage, options?: OptionsObject): SnackbarKey {
    if (!this.notifications) {
      throw new Error("Notification Serivce is not attached.");
    }
    return this.notifications?.enqueueSnackbar(message, options);
  }

  private getOptionsWithVariant(variant: VariantType, options?: OptionsObject) {
    const notificationOptions = options ?? {};
    notificationOptions.variant = variant;
    return notificationOptions;
  }

  success(
    message: SnackbarMessage,
    options?: Omit<OptionsObject, "variant">
  ): SnackbarKey {
    return this.toast(message, this.getOptionsWithVariant("success", options));
  }

  warning(
    message: SnackbarMessage,
    options?: Omit<OptionsObject, "variant">
  ): SnackbarKey {
    return this.toast(message, this.getOptionsWithVariant("warning", options));
  }

  info(
    message: SnackbarMessage,
    options?: Omit<OptionsObject, "variant">
  ): SnackbarKey {
    return this.toast(message, this.getOptionsWithVariant("info", options));
  }

  error(
    message: SnackbarMessage,
    options?: Omit<OptionsObject, "variant">
  ): SnackbarKey {
    return this.toast(message, this.getOptionsWithVariant("error", options));
  }

  close(key: SnackbarKey) {
    this.notifications?.closeSnackbar(key);
  }
}
export default NotificationService;
