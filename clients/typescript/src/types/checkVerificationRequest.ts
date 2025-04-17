import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";

export interface CheckVerificationRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    micrNumber: string;
    routingNumber: string;
    draftNumber: string;
    amount: number;
    payee: string;
    vendorIndex: number | null;
    version1: VersionType;
    messageId: string;
}