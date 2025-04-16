import { LoanPledgeFields } from "./loanPledgeFields";
import { LoanPledgeNameSelectableFields } from "./loanPledgeNameSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeSelectableFields {
    includeAllLoanPledgeFieldsValue: boolean;
    includeAllLoanPledgeFieldsValueSpecified: boolean;
    includeAllLoanPledgeFields: boolean | null;
    loanPledgeFields: LoanPledgeFields;
    loanPledgeNameSelectableFields: LoanPledgeNameSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}