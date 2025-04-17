import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanLoanSingleSelectableFields } from "./reservePlanLoanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ReservePlanLoanPagedListSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanLoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}