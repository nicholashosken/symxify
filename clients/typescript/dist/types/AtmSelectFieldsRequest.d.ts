import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AtmSingleSelectableFields } from "./atmSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AtmSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AtmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
