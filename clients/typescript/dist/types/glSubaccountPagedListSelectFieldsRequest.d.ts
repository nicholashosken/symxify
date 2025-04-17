import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlSubaccountSingleSelectableFields } from "./glSubaccountSingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlSubaccountPagedListSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlSubaccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
