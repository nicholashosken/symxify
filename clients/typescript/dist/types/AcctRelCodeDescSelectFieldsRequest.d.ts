import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctRelCodeDescSingleSelectableFields } from "./acctRelCodeDescSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AcctRelCodeDescSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctRelCodeDescSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
