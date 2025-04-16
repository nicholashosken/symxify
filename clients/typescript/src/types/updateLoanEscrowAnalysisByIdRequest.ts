import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowAnalysisFields_2 } from "./loanEscrowAnalysisFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanEscrowAnalysisByIdRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowAnalysisLocatorValue: number;
    loanEscrowAnalysisLocatorValueSpecified: boolean;
    loanEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanEscrowAnalysisFields: LoanEscrowAnalysisFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}