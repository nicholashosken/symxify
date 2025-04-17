import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlxLateSingleSelectableFields } from "./glxLateSingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlxLateSelectFieldsRequest {
    glxLateGlCode: number | null;
    glxLateTypeList: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlxLateSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
