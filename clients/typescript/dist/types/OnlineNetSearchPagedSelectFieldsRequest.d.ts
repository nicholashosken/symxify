import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineNetSingleSelectableFields } from "./onlineNetSingleSelectableFields";
import { OnlineNetSearchFilter } from "./onlineNetSearchFilter";
import { VersionType } from "./versionType";
export interface OnlineNetSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineNetSingleSelectableFields;
    searchFilter: OnlineNetSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
