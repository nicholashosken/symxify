import { LoanAppPledgeFields } from "./loanAppPledgeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPledgeSingleSelectableFields {
    includeAllLoanAppPledgeFieldsValue: boolean;
    includeAllLoanAppPledgeFieldsValueSpecified: boolean;
    includeAllLoanAppPledgeFields: boolean | null;
    loanAppPledgeFields: LoanAppPledgeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
