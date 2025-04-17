import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";

export interface TransactionsBaseRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    messageId: string;
    branchId: number | null;
}