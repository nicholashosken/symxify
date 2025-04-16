import { LoanPledgeFields } from "./loanPledgeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeSingleSelectableFields {
    includeAllLoanPledgeFieldsValue: boolean;
    includeAllLoanPledgeFieldsValueSpecified: boolean;
    includeAllLoanPledgeFields: boolean | null;
    loanPledgeFields: LoanPledgeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}