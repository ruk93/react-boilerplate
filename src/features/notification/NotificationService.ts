import { injectable } from "inversify";
    
export const NotificationServiceType = Symbol.for("NotificationService");
    
@injectable()
class NotificationService {

}
export default NotificationService;