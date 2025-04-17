import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppNoteSingleSelectableFields } from "./loanAppNoteSingleSelectableFields";
import { LoanAppNoteSearchFilter } from "./loanAppNoteSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppNoteSingleSelectableFields;
    searchFilter: LoanAppNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
