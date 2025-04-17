import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareSingleSelectableFields } from "./shareSingleSelectableFields";
import { ShareSearchFilter } from "./shareSearchFilter";
import { VersionType } from "./versionType";
export interface ShareSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareSingleSelectableFields;
    searchFilter: ShareSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
