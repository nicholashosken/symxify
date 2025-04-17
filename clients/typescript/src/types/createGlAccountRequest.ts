import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountFields_2 } from "./glAccountFields_2";
import { VersionType } from "./versionType";

export interface CreateGlAccountRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glAccountFields: GlAccountFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}