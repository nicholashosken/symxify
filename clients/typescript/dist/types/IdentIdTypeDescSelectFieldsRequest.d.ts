import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IdentIdTypeDescSingleSelectableFields } from "./identIdTypeDescSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IdentIdTypeDescSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IdentIdTypeDescSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
