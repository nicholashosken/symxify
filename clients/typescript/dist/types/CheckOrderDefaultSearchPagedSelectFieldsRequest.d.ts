import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CheckOrderDefaultSingleSelectableFields } from "./checkOrderDefaultSingleSelectableFields";
import { CheckOrderDefaultSearchFilter } from "./checkOrderDefaultSearchFilter";
import { VersionType } from "./versionType";
export interface CheckOrderDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CheckOrderDefaultSingleSelectableFields;
    searchFilter: CheckOrderDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
