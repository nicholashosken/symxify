import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NameFieldNameSingleSelectableFields } from "./nameFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NameFieldNameSelectFieldsRequest {
    nameFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NameFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
