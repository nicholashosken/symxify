import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlSubaccountFields_2 } from "./glSubaccountFields_2";
import { VersionType } from "./versionType";

export interface UpdateGlSubaccountByIdRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    glSubaccountId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glSubaccountFields: GlSubaccountFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}