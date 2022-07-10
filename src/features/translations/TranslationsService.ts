import { injectable } from "inversify";

export const TranslationsServiceType = Symbol.for("TranslationsService");

@injectable()
class TranslationsService {}
export default TranslationsService;
