import { LoanAppEscrowAnalysisFields } from "./loanAppEscrowAnalysisFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppEscrowAnalysisSelectableFields {
    includeAllLoanAppEscrowAnalysisFieldsValue: boolean;
    includeAllLoanAppEscrowAnalysisFieldsValueSpecified: boolean;
    includeAllLoanAppEscrowAnalysisFields: boolean | null;
    loanAppEscrowAnalysisFields: LoanAppEscrowAnalysisFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}