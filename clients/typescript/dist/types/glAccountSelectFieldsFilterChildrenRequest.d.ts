import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountSelectableFields } from "./glAccountSelectableFields";
import { GlAccountChildrenFilter } from "./glAccountChildrenFilter";
import { VersionType } from "./versionType";
export interface GlAccountSelectFieldsFilterChildrenRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlAccountSelectableFields;
    childrenSearchFilter: GlAccountChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
