import { LoanAppMiscFields } from "./loanAppMiscFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppMiscSelectableFields {
    includeAllLoanAppMiscFieldsValue: boolean;
    includeAllLoanAppMiscFieldsValueSpecified: boolean;
    includeAllLoanAppMiscFields: boolean | null;
    loanAppMiscFields: LoanAppMiscFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
