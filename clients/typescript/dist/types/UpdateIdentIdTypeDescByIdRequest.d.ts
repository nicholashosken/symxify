import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IdentIdTypeDescFields_2 } from "./identIdTypeDescFields_2";
import { VersionType } from "./versionType";
export interface UpdateIdentIdTypeDescByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    identIdTypeDescFields: IdentIdTypeDescFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
