import { LoanAppWorkFlowFields } from "./loanAppWorkFlowFields";
import { VersionType } from "./versionType";
export interface LoanAppWorkFlowSingleSelectableFields {
    includeAllLoanAppWorkFlowFields: boolean | null;
    loanAppWorkFlowFields: LoanAppWorkFlowFields;
    version1: VersionType;
}
