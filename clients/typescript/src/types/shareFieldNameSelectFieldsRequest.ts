import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareFieldNameSingleSelectableFields } from "./shareFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareFieldNameSelectFieldsRequest {
    shareFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}