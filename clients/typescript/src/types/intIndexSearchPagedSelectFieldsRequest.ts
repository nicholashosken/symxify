import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IntIndexSingleSelectableFields } from "./intIndexSingleSelectableFields";
import { IntIndexSearchFilter } from "./intIndexSearchFilter";
import { VersionType } from "./versionType";

export interface IntIndexSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IntIndexSingleSelectableFields;
    searchFilter: IntIndexSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}