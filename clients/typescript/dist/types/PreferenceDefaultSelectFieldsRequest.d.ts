import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceDefaultSingleSelectableFields } from "./preferenceDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PreferenceDefaultSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
