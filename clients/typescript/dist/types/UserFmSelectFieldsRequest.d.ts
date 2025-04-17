import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserFmSingleSelectableFields } from "./userFmSingleSelectableFields";
import { VersionType } from "./versionType";
export interface UserFmSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserFmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
