import { LoanAppVerForm } from "./loanAppVerForm";
import { VersionType } from "./versionType";

export interface LoanAppVerFormSearchPagedSelectFieldsResponse {
    loanAppVerForm: LoanAppVerForm[];
    token: string;
    version1: VersionType;
    messageId: string;
}