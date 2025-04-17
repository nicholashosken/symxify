import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctMembGrpDescFields_2 } from "./acctMembGrpDescFields_2";
import { VersionType } from "./versionType";
export interface UpdateAcctMembGrpDescByIdRequest {
    acctMembGrpDescMemberGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctMembGrpDescFields: AcctMembGrpDescFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
