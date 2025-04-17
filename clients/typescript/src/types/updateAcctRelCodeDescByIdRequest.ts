import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctRelCodeDescFields_2 } from "./acctRelCodeDescFields_2";
import { VersionType } from "./versionType";

export interface UpdateAcctRelCodeDescByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctRelCodeDescFields: AcctRelCodeDescFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}