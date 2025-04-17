import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlHistorySingleSelectableFields } from "./glHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlHistoryPagedListSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}