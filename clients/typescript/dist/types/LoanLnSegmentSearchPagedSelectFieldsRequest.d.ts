import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanLnSegmentSingleSelectableFields } from "./loanLnSegmentSingleSelectableFields";
import { LoanLnSegmentSearchFilter } from "./loanLnSegmentSearchFilter";
import { VersionType } from "./versionType";
export interface LoanLnSegmentSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanLnSegmentSingleSelectableFields;
    searchFilter: LoanLnSegmentSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
