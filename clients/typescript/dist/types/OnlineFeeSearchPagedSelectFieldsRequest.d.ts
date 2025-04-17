import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineFeeSingleSelectableFields } from "./onlineFeeSingleSelectableFields";
import { OnlineFeeSearchFilter } from "./onlineFeeSearchFilter";
import { VersionType } from "./versionType";
export interface OnlineFeeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineFeeSingleSelectableFields;
    searchFilter: OnlineFeeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
