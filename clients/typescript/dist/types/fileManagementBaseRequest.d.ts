import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
export interface FileManagementBaseRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    messageId: string;
}
