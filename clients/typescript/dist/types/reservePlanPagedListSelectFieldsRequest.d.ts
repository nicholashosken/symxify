import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanSingleSelectableFields } from "./reservePlanSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ReservePlanPagedListSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
