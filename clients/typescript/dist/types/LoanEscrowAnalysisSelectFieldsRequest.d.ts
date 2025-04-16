import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowAnalysisSingleSelectableFields } from "./loanEscrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanEscrowAnalysisSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowAnalysisLocatorValue: number;
    loanEscrowAnalysisLocatorValueSpecified: boolean;
    loanEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanEscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
