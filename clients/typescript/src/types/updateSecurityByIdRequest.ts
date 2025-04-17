import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecurityFields_2 } from "./securityFields_2";
import { VersionType } from "./versionType";

export interface UpdateSecurityByIdRequest {
    securitySecurityCategory: number | null;
    securityRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    securityFields: SecurityFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}