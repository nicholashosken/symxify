import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineCardSingleSelectableFields } from "./onlineCardSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineCardPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineCardSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
