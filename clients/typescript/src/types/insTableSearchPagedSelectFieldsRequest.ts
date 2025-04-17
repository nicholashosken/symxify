import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InsTableSingleSelectableFields } from "./insTableSingleSelectableFields";
import { InsTableSearchFilter } from "./insTableSearchFilter";
import { VersionType } from "./versionType";

export interface InsTableSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InsTableSingleSelectableFields;
    searchFilter: InsTableSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}