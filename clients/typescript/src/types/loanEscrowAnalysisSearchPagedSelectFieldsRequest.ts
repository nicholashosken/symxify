import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanEscrowAnalysisSingleSelectableFields } from "./loanEscrowAnalysisSingleSelectableFields";
import { LoanEscrowAnalysisSearchFilter } from "./loanEscrowAnalysisSearchFilter";
import { VersionType } from "./versionType";

export interface LoanEscrowAnalysisSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanEscrowAnalysisSingleSelectableFields;
    searchFilter: LoanEscrowAnalysisSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}