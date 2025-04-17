import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NameSingleSelectableFields } from "./nameSingleSelectableFields";
import { NameSearchFilter } from "./nameSearchFilter";
import { VersionType } from "./versionType";
export interface NameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NameSingleSelectableFields;
    searchFilter: NameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
