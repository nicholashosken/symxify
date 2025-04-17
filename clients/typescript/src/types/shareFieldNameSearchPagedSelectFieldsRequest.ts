import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareFieldNameSingleSelectableFields } from "./shareFieldNameSingleSelectableFields";
import { ShareFieldNameSearchFilter } from "./shareFieldNameSearchFilter";
import { VersionType } from "./versionType";

export interface ShareFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareFieldNameSingleSelectableFields;
    searchFilter: ShareFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}