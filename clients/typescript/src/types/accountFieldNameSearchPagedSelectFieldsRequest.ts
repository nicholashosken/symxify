import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AccountFieldNameSingleSelectableFields } from "./accountFieldNameSingleSelectableFields";
import { AccountFieldNameSearchFilter } from "./accountFieldNameSearchFilter";
import { VersionType } from "./versionType";

export interface AccountFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AccountFieldNameSingleSelectableFields;
    searchFilter: AccountFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}