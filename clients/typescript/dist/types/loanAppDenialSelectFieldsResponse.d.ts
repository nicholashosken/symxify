import { LoanAppDenial } from "./loanAppDenial";
import { VersionType } from "./versionType";
export interface LoanAppDenialSelectFieldsResponse {
    loanAppDenial: LoanAppDenial;
    version1: VersionType;
    messageId: string;
}
