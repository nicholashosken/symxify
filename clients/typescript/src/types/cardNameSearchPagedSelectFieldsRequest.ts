import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardNameSingleSelectableFields } from "./cardNameSingleSelectableFields";
import { CardNameSearchFilter } from "./cardNameSearchFilter";
import { VersionType } from "./versionType";

export interface CardNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardNameSingleSelectableFields;
    searchFilter: CardNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}