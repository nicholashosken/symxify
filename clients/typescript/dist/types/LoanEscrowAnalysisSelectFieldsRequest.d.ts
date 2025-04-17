import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowAnalysisSingleSelectableFields } from "./loanEscrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanEscrowAnalysisSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanEscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
