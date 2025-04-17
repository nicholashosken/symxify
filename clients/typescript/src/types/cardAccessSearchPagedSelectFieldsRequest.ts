import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardAccessSingleSelectableFields } from "./cardAccessSingleSelectableFields";
import { CardAccessSearchFilter } from "./cardAccessSearchFilter";
import { VersionType } from "./versionType";

export interface CardAccessSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardAccessSingleSelectableFields;
    searchFilter: CardAccessSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}