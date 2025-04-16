import { LoanAppEscrowFields } from "./loanAppEscrowFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppEscrowSingleSelectableFields {
    includeAllLoanAppEscrowFieldsValue: boolean;
    includeAllLoanAppEscrowFieldsValueSpecified: boolean;
    includeAllLoanAppEscrowFields: boolean | null;
    loanAppEscrowFields: LoanAppEscrowFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
