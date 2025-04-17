import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineSbAddOnSingleSelectableFields } from "./onlineSbAddOnSingleSelectableFields";
import { OnlineSbAddOnSearchFilter } from "./onlineSbAddOnSearchFilter";
import { VersionType } from "./versionType";
export interface OnlineSbAddOnSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineSbAddOnSingleSelectableFields;
    searchFilter: OnlineSbAddOnSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
