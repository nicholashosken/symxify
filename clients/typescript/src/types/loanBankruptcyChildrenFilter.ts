import { LoanBankruptcyPrepetitionBalFilter } from "./loanBankruptcyPrepetitionBalFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcyChildrenFilter {
    loanBankruptcyPrepetitionBalFilter: LoanBankruptcyPrepetitionBalFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}