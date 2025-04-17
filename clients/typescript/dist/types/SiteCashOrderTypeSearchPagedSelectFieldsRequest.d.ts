import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SiteCashOrderTypeSingleSelectableFields } from "./siteCashOrderTypeSingleSelectableFields";
import { SiteCashOrderTypeSearchFilter } from "./siteCashOrderTypeSearchFilter";
import { VersionType } from "./versionType";
export interface SiteCashOrderTypeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SiteCashOrderTypeSingleSelectableFields;
    searchFilter: SiteCashOrderTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
