import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineBlockSingleSelectableFields } from "./onlineBlockSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineBlockPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineBlockSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
