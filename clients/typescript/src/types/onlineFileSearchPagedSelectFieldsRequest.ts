import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineFileSingleSelectableFields } from "./onlineFileSingleSelectableFields";
import { OnlineFileSearchFilter } from "./onlineFileSearchFilter";
import { VersionType } from "./versionType";

export interface OnlineFileSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineFileSingleSelectableFields;
    searchFilter: OnlineFileSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}