import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppEscrowAnalysisSingleSelectableFields } from "./loanAppEscrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowAnalysisSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppEscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}