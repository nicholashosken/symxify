import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineNetSingleSelectableFields } from "./onlineNetSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineNetPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineNetSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
