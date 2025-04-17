import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCodeFields_2 } from "./glCodeFields_2";
import { VersionType } from "./versionType";
export interface UpdateGlCodeByIdRequest {
    glCodePrimaryGlCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glCodeFields: GlCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
