import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctLimitSingleSelectableFields } from "./acctLimitSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcctLimitSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctLimitSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}