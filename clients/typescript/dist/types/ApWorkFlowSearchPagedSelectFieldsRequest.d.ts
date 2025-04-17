import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ApWorkFlowSingleSelectableFields } from "./apWorkFlowSingleSelectableFields";
import { ApWorkFlowSearchFilter } from "./apWorkFlowSearchFilter";
import { VersionType } from "./versionType";
export interface ApWorkFlowSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ApWorkFlowSingleSelectableFields;
    searchFilter: ApWorkFlowSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
