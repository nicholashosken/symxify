import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTrackingTypeFields_2 } from "./acctTrackingTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateAcctTrackingTypeByIdRequest {
    acctTrackingTypeRecordSelection: number | null;
    acctTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctTrackingTypeFields: AcctTrackingTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
