import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanNoteSingleSelectableFields } from "./externalLoanNoteSingleSelectableFields";
import { ExternalLoanNoteSearchFilter } from "./externalLoanNoteSearchFilter";
import { VersionType } from "./versionType";

export interface ExternalLoanNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanNoteSingleSelectableFields;
    searchFilter: ExternalLoanNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}