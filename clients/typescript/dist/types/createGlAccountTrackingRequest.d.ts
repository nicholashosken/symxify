import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountTrackingFields_2 } from "./glAccountTrackingFields_2";
import { VersionType } from "./versionType";
export interface CreateGlAccountTrackingRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glAccountTrackingFields: GlAccountTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
