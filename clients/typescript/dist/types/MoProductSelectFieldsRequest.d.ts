import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MoProductSingleSelectableFields } from "./moProductSingleSelectableFields";
import { VersionType } from "./versionType";
export interface MoProductSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MoProductSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
