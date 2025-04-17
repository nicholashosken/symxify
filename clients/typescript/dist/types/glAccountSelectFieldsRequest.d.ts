import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountSingleSelectableFields } from "./glAccountSingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlAccountSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlAccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
