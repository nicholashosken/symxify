import { LoanHold } from "./loanHold";
import { VersionType } from "./versionType";
export interface LoanHoldPagedListSelectFieldsResponse {
    loanHold: LoanHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}
