import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardNoteSingleSelectableFields } from "./cardNoteSingleSelectableFields";
import { CardNoteSearchFilter } from "./cardNoteSearchFilter";
import { VersionType } from "./versionType";

export interface CardNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardNoteSingleSelectableFields;
    searchFilter: CardNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}