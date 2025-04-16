import { LoanPledgeNameFilter } from "./loanPledgeNameFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeChildrenFilter {
    loanPledgeNameFilter: LoanPledgeNameFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}