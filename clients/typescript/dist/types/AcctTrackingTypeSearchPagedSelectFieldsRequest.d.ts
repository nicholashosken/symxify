import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctTrackingTypeSingleSelectableFields } from "./acctTrackingTypeSingleSelectableFields";
import { AcctTrackingTypeSearchFilter } from "./acctTrackingTypeSearchFilter";
import { VersionType } from "./versionType";
export interface AcctTrackingTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctTrackingTypeSingleSelectableFields;
    searchFilter: AcctTrackingTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
