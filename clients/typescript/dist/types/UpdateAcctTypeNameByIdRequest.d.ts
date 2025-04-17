import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTypeNameFields_2 } from "./acctTypeNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateAcctTypeNameByIdRequest {
    acctTypeNameAcctType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctTypeNameFields: AcctTypeNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
