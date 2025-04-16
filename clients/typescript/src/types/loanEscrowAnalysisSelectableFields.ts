import { LoanEscrowAnalysisFields } from "./loanEscrowAnalysisFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanEscrowAnalysisSelectableFields {
    includeAllLoanEscrowAnalysisFieldsValue: boolean;
    includeAllLoanEscrowAnalysisFieldsValueSpecified: boolean;
    includeAllLoanEscrowAnalysisFields: boolean | null;
    loanEscrowAnalysisFields: LoanEscrowAnalysisFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}