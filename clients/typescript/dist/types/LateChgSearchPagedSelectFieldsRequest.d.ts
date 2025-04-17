import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LateChgSingleSelectableFields } from "./lateChgSingleSelectableFields";
import { LateChgSearchFilter } from "./lateChgSearchFilter";
import { VersionType } from "./versionType";
export interface LateChgSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LateChgSingleSelectableFields;
    searchFilter: LateChgSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
