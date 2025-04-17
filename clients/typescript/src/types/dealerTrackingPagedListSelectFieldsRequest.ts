import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DealerTrackingSingleSelectableFields } from "./dealerTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DealerTrackingPagedListSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DealerTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}