import { LoanAppCopiedFlds } from "./loanAppCopiedFlds";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFldsSelectFieldsResponse {
    loanAppCopiedFlds: LoanAppCopiedFlds;
    version1: VersionType;
    messageId: string;
}