import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctMembGrpDescSingleSelectableFields } from "./acctMembGrpDescSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AcctMembGrpDescSelectFieldsRequest {
    acctMembGrpDescMemberGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctMembGrpDescSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
