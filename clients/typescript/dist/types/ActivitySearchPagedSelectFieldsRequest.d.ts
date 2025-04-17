import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ActivitySingleSelectableFields } from "./activitySingleSelectableFields";
import { ActivitySearchFilter } from "./activitySearchFilter";
import { VersionType } from "./versionType";
export interface ActivitySearchPagedSelectFieldsRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ActivitySingleSelectableFields;
    searchFilter: ActivitySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
