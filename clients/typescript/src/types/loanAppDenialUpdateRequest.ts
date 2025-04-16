import { LoanAppDenialFields_2 } from "./loanAppDenialFields_2";

export interface LoanAppDenialUpdateRequest {
    loanAppDenialDenialNoticeValue: number;
    loanAppDenialDenialNoticeValueSpecified: boolean;
    loanAppDenialDenialNotice: number | null;
    loanAppDenialFields: LoanAppDenialFields_2;
}