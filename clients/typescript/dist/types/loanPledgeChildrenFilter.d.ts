import { LoanPledgeNameFilter } from "./loanPledgeNameFilter";
import { VersionType } from "./versionType";
export interface LoanPledgeChildrenFilter {
    loanPledgeNameFilter: LoanPledgeNameFilter;
    version1: VersionType;
}
