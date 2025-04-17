import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareDefaultSingleSelectableFields } from "./shareDefaultSingleSelectableFields";
import { ShareDefaultSearchFilter } from "./shareDefaultSearchFilter";
import { VersionType } from "./versionType";
export interface ShareDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareDefaultSingleSelectableFields;
    searchFilter: ShareDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
