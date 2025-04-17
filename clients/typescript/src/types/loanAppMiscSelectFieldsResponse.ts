import { LoanAppMisc } from "./loanAppMisc";
import { VersionType } from "./versionType";

export interface LoanAppMiscSelectFieldsResponse {
    loanAppMisc: LoanAppMisc;
    version1: VersionType;
    messageId: string;
}