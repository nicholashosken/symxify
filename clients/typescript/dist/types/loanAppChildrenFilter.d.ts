import { LoanAppEscrowFilter } from "./loanAppEscrowFilter";
import { LoanAppEscrowAnalysisFilter } from "./loanAppEscrowAnalysisFilter";
import { LoanAppFinanceFilter } from "./loanAppFinanceFilter";
import { LoanAppLnSegmentFilter } from "./loanAppLnSegmentFilter";
import { LoanAppNoteFilter } from "./loanAppNoteFilter";
import { LoanAppPersonFilter } from "./loanAppPersonFilter";
import { LoanAppPledgeFilter } from "./loanAppPledgeFilter";
import { LoanAppScheduleFilter } from "./loanAppScheduleFilter";
import { LoanAppTrackingFilter } from "./loanAppTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppChildrenFilter {
    loanAppEscrowFilter: LoanAppEscrowFilter;
    loanAppEscrowAnalysisFilter: LoanAppEscrowAnalysisFilter;
    loanAppFinanceFilter: LoanAppFinanceFilter;
    loanAppLnSegmentFilter: LoanAppLnSegmentFilter;
    loanAppNoteFilter: LoanAppNoteFilter;
    loanAppPersonFilter: LoanAppPersonFilter;
    loanAppPledgeFilter: LoanAppPledgeFilter;
    loanAppScheduleFilter: LoanAppScheduleFilter;
    loanAppTrackingFilter: LoanAppTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
