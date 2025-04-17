import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";

export interface ContactEventMgmtBaseRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    messageId: string;
}