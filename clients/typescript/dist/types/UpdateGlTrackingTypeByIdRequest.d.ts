import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTrackingTypeFields_2 } from "./glTrackingTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateGlTrackingTypeByIdRequest {
    glTrackingTypeRecordSelection: number | null;
    glTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glTrackingTypeFields: GlTrackingTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
