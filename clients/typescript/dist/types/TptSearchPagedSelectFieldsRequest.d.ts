import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TptSingleSelectableFields } from "./tptSingleSelectableFields";
import { TptSearchFilter } from "./tptSearchFilter";
import { VersionType } from "./versionType";
export interface TptSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TptSingleSelectableFields;
    searchFilter: TptSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
