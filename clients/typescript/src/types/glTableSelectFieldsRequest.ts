import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTableSingleSelectableFields } from "./glTableSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlTableSelectFieldsRequest {
    glTableGlTableType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}