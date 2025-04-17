import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecuritySingleSelectableFields } from "./securitySingleSelectableFields";
import { VersionType } from "./versionType";
export interface SecuritySelectFieldsRequest {
    securitySecurityCategory: number | null;
    securityRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SecuritySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
