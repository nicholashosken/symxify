import { LoanAppDefaultFields_2 } from "./loanAppDefaultFields_2";

export interface LoanAppDefaultUpdateRequest {
    loanAppDefaultApplicationTypeValue: number;
    loanAppDefaultApplicationTypeValueSpecified: boolean;
    loanAppDefaultApplicationType: number | null;
    loanAppDefaultFields: LoanAppDefaultFields_2;
}