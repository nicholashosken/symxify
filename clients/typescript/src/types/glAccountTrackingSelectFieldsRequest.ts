import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountTrackingSingleSelectableFields } from "./glAccountTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlAccountTrackingSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    glAccountTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlAccountTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}