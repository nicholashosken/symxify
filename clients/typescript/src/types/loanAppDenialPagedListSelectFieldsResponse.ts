import { LoanAppDenial } from "./loanAppDenial";
import { VersionType } from "./versionType";

export interface LoanAppDenialPagedListSelectFieldsResponse {
    loanAppDenial: LoanAppDenial[];
    token: string;
    version1: VersionType;
    messageId: string;
}