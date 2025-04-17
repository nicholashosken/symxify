import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftNameSingleSelectableFields } from "./eftNameSingleSelectableFields";
import { EftNameSearchFilter } from "./eftNameSearchFilter";
import { VersionType } from "./versionType";

export interface EftNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftNameSingleSelectableFields;
    searchFilter: EftNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}