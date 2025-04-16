import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppEscrowAnalysisSingleSelectableFields } from "./loanAppEscrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppEscrowAnalysisSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppEscrowAnalysisLocatorValue: number;
    loanAppEscrowAnalysisLocatorValueSpecified: boolean;
    loanAppEscrowAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppEscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
