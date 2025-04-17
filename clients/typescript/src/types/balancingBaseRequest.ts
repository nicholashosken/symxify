import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";

export interface BalancingBaseRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    messageId: string;
}