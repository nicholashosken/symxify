import { LoanHold } from "./loanHold";
import { VersionType } from "./versionType";
export interface LoanHoldSelectFieldsResponse {
    loanHold: LoanHold;
    version1: VersionType;
    messageId: string;
}
