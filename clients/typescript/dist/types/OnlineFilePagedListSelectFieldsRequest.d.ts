import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineFileSingleSelectableFields } from "./onlineFileSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineFilePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineFileSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
