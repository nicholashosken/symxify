import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanSingleSelectableFields } from "./reservePlanSingleSelectableFields";
import { ReservePlanSearchFilter } from "./reservePlanSearchFilter";
import { VersionType } from "./versionType";

export interface ReservePlanSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanSingleSelectableFields;
    searchFilter: ReservePlanSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}