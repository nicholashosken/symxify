import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DivTableSingleSelectableFields } from "./divTableSingleSelectableFields";
import { DivTableSearchFilter } from "./divTableSearchFilter";
import { VersionType } from "./versionType";
export interface DivTableSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DivTableSingleSelectableFields;
    searchFilter: DivTableSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
