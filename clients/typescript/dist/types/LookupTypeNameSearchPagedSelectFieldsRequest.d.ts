import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LookupTypeNameSingleSelectableFields } from "./lookupTypeNameSingleSelectableFields";
import { LookupTypeNameSearchFilter } from "./lookupTypeNameSearchFilter";
import { VersionType } from "./versionType";
export interface LookupTypeNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LookupTypeNameSingleSelectableFields;
    searchFilter: LookupTypeNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
