import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTableFields_2 } from "./glTableFields_2";
import { VersionType } from "./versionType";
export interface UpdateGlTableByIdRequest {
    glTableGlTableType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glTableFields: GlTableFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
