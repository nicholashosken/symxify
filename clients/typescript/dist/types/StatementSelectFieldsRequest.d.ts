import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StatementSingleSelectableFields } from "./statementSingleSelectableFields";
import { VersionType } from "./versionType";
export interface StatementSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StatementSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
