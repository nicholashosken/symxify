import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlSubaccountSingleSelectableFields } from "./glSubaccountSingleSelectableFields";
import { GlSubaccountSearchFilter } from "./glSubaccountSearchFilter";
import { VersionType } from "./versionType";

export interface GlSubaccountSearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlSubaccountSingleSelectableFields;
    searchFilter: GlSubaccountSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}