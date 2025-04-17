import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardSingleSelectableFields } from "./cardSingleSelectableFields";
import { CardSearchFilter } from "./cardSearchFilter";
import { VersionType } from "./versionType";
export interface CardSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardSingleSelectableFields;
    searchFilter: CardSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
