import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanTransactionSingleSelectableFields } from "./reservePlanTransactionSingleSelectableFields";
import { ReservePlanTransactionSearchFilter } from "./reservePlanTransactionSearchFilter";
import { VersionType } from "./versionType";
export interface ReservePlanTransactionSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanTransactionSingleSelectableFields;
    searchFilter: ReservePlanTransactionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
