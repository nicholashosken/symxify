import { LoanAppFields } from "./loanAppFields";
import { LoanAppEscrowSelectableFields } from "./loanAppEscrowSelectableFields";
import { LoanAppEscrowAnalysisSelectableFields } from "./loanAppEscrowAnalysisSelectableFields";
import { LoanAppFinanceSelectableFields } from "./loanAppFinanceSelectableFields";
import { LoanAppLnSegmentSelectableFields } from "./loanAppLnSegmentSelectableFields";
import { LoanAppNoteSelectableFields } from "./loanAppNoteSelectableFields";
import { LoanAppPersonSelectableFields } from "./loanAppPersonSelectableFields";
import { LoanAppPledgeSelectableFields } from "./loanAppPledgeSelectableFields";
import { LoanAppScheduleSelectableFields } from "./loanAppScheduleSelectableFields";
import { LoanAppTrackingSelectableFields } from "./loanAppTrackingSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppSelectableFields {
    includeAllLoanAppFields: boolean | null;
    loanAppFields: LoanAppFields;
    loanAppEscrowSelectableFields: LoanAppEscrowSelectableFields;
    loanAppEscrowAnalysisSelectableFields: LoanAppEscrowAnalysisSelectableFields;
    loanAppFinanceSelectableFields: LoanAppFinanceSelectableFields;
    loanAppLnSegmentSelectableFields: LoanAppLnSegmentSelectableFields;
    loanAppNoteSelectableFields: LoanAppNoteSelectableFields;
    loanAppPersonSelectableFields: LoanAppPersonSelectableFields;
    loanAppPledgeSelectableFields: LoanAppPledgeSelectableFields;
    loanAppScheduleSelectableFields: LoanAppScheduleSelectableFields;
    loanAppTrackingSelectableFields: LoanAppTrackingSelectableFields;
    version1: VersionType;
}