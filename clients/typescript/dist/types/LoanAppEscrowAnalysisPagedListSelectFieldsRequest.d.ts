import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppEscrowAnalysisSingleSelectableFields } from "./loanAppEscrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppEscrowAnalysisPagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppEscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
