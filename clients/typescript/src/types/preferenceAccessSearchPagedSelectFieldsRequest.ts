import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PreferenceAccessSingleSelectableFields } from "./preferenceAccessSingleSelectableFields";
import { PreferenceAccessSearchFilter } from "./preferenceAccessSearchFilter";
import { VersionType } from "./versionType";

export interface PreferenceAccessSearchPagedSelectFieldsRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PreferenceAccessSingleSelectableFields;
    searchFilter: PreferenceAccessSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}