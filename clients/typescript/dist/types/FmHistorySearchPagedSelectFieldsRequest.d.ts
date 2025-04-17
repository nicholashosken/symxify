import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { FmHistorySingleSelectableFields } from "./fmHistorySingleSelectableFields";
import { FmHistorySearchFilter } from "./fmHistorySearchFilter";
import { VersionType } from "./versionType";
export interface FmHistorySearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: FmHistorySingleSelectableFields;
    searchFilter: FmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
