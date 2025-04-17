import { LoanAppCopiedFlds } from "./loanAppCopiedFlds";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFldsSearchPagedSelectFieldsResponse {
    loanAppCopiedFlds: LoanAppCopiedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}