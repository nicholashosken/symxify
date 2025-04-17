import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PrivGroupSingleSelectableFields } from "./privGroupSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PrivGroupSelectFieldsRequest {
    privGroupGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PrivGroupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
