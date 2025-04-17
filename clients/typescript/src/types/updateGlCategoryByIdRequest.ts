import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCategoryFields_2 } from "./glCategoryFields_2";
import { VersionType } from "./versionType";

export interface UpdateGlCategoryByIdRequest {
    glCategoryGlCategory: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glCategoryFields: GlCategoryFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}