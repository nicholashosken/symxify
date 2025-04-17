import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppEscrowAnalysisSingleSelectableFields } from "./loanAppEscrowAnalysisSingleSelectableFields";
import { LoanAppEscrowAnalysisSearchFilter } from "./loanAppEscrowAnalysisSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppEscrowAnalysisSingleSelectableFields;
    searchFilter: LoanAppEscrowAnalysisSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
