import { LoanAppFormPktFields } from "./loanAppFormPktFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFormPktSingleSelectableFields {
    includeAllLoanAppFormPktFieldsValue: boolean;
    includeAllLoanAppFormPktFieldsValueSpecified: boolean;
    includeAllLoanAppFormPktFields: boolean | null;
    loanAppFormPktFields: LoanAppFormPktFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
