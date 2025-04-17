import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanNoteSingleSelectableFields } from "./loanNoteSingleSelectableFields";
import { LoanNoteSearchFilter } from "./loanNoteSearchFilter";
import { VersionType } from "./versionType";

export interface LoanNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanNoteSingleSelectableFields;
    searchFilter: LoanNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}