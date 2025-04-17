import { LoanAppVerForm } from "./loanAppVerForm";
import { VersionType } from "./versionType";
export interface LoanAppVerFormSelectFieldsResponse {
    loanAppVerForm: LoanAppVerForm;
    version1: VersionType;
    messageId: string;
}
