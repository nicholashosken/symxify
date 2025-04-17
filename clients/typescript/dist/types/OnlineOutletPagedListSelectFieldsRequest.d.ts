import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineOutletSingleSelectableFields } from "./onlineOutletSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineOutletPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineOutletSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
