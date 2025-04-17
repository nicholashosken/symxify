import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctLimitFields_2 } from "./acctLimitFields_2";
import { VersionType } from "./versionType";

export interface UpdateAcctLimitByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctLimitFields: AcctLimitFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}