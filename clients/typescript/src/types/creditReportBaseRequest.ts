import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";

export interface CreditReportBaseRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    messageId: string;
}