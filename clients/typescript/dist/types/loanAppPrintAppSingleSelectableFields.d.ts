import { LoanAppPrintAppFields } from "./loanAppPrintAppFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPrintAppSingleSelectableFields {
    includeAllLoanAppPrintAppFieldsValue: boolean;
    includeAllLoanAppPrintAppFieldsValueSpecified: boolean;
    includeAllLoanAppPrintAppFields: boolean | null;
    loanAppPrintAppFields: LoanAppPrintAppFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
