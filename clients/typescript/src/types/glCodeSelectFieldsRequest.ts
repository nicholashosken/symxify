import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlCodeSingleSelectableFields } from "./glCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlCodeSelectFieldsRequest {
    glCodePrimaryGlCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}