import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlxLateFields_2 } from "./glxLateFields_2";
import { VersionType } from "./versionType";
export interface UpdateGlxLateByIdRequest {
    glxLateGlCode: number | null;
    glxLateTypeList: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glxLateFields: GlxLateFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
