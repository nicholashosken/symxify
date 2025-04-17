import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTypeNameSingleSelectableFields } from "./acctTypeNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcctTypeNameSelectFieldsRequest {
    acctTypeNameAcctType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctTypeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}