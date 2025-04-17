import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PlanDefaultSingleSelectableFields } from "./planDefaultSingleSelectableFields";
import { PlanDefaultSearchFilter } from "./planDefaultSearchFilter";
import { VersionType } from "./versionType";
export interface PlanDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PlanDefaultSingleSelectableFields;
    searchFilter: PlanDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
