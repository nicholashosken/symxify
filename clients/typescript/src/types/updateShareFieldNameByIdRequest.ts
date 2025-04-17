import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareFieldNameFields_2 } from "./shareFieldNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateShareFieldNameByIdRequest {
    shareFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    shareFieldNameFields: ShareFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}