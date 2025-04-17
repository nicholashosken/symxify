import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCategorySingleSelectableFields } from "./glCategorySingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlCategorySelectFieldsRequest {
    glCategoryGlCategory: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlCategorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
