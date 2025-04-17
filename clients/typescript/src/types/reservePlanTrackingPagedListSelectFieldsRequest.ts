import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanTrackingSingleSelectableFields } from "./reservePlanTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ReservePlanTrackingPagedListSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}