import { LoanAppCopiedFlds } from "./loanAppCopiedFlds";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFldsPagedListSelectFieldsResponse {
    loanAppCopiedFlds: LoanAppCopiedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}