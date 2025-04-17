import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineCardSingleSelectableFields } from "./onlineCardSingleSelectableFields";
import { OnlineCardSearchFilter } from "./onlineCardSearchFilter";
import { VersionType } from "./versionType";
export interface OnlineCardSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineCardSingleSelectableFields;
    searchFilter: OnlineCardSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
