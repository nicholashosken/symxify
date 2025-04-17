import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineFeeSingleSelectableFields } from "./onlineFeeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineFeePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
