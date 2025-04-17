import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlSubaccountSingleSelectableFields } from "./glSubaccountSingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlSubaccountSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    glSubaccountId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlSubaccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
