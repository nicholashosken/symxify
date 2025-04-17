import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PlanFieldNameSingleSelectableFields } from "./planFieldNameSingleSelectableFields";
import { PlanFieldNameSearchFilter } from "./planFieldNameSearchFilter";
import { VersionType } from "./versionType";

export interface PlanFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PlanFieldNameSingleSelectableFields;
    searchFilter: PlanFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}