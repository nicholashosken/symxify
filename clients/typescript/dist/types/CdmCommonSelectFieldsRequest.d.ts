import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmCommonSingleSelectableFields } from "./cdmCommonSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CdmCommonSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CdmCommonSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
