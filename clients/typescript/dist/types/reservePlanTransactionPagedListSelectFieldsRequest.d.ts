import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanTransactionSingleSelectableFields } from "./reservePlanTransactionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ReservePlanTransactionPagedListSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanTransactionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
