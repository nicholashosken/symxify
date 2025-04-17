import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartStatementSingleSelectableFields } from "./partStatementSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PartStatementSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PartStatementSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
