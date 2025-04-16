import { LoanTransferFields } from "./loanTransferFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTransferSingleSelectableFields {
    includeAllLoanTransferFieldsValue: boolean;
    includeAllLoanTransferFieldsValueSpecified: boolean;
    includeAllLoanTransferFields: boolean | null;
    loanTransferFields: LoanTransferFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}