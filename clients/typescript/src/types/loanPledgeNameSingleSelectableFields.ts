import { LoanPledgeNameFields } from "./loanPledgeNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeNameSingleSelectableFields {
    includeAllLoanPledgeNameFieldsValue: boolean;
    includeAllLoanPledgeNameFieldsValueSpecified: boolean;
    includeAllLoanPledgeNameFields: boolean | null;
    loanPledgeNameFields: LoanPledgeNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}