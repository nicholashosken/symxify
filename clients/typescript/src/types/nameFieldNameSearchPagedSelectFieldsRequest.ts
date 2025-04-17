import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NameFieldNameSingleSelectableFields } from "./nameFieldNameSingleSelectableFields";
import { NameFieldNameSearchFilter } from "./nameFieldNameSearchFilter";
import { VersionType } from "./versionType";

export interface NameFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NameFieldNameSingleSelectableFields;
    searchFilter: NameFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}