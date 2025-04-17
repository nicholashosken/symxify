import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanTrackingSingleSelectableFields } from "./reservePlanTrackingSingleSelectableFields";
import { ReservePlanTrackingSearchFilter } from "./reservePlanTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface ReservePlanTrackingSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanTrackingSingleSelectableFields;
    searchFilter: ReservePlanTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}