import { LoanHold } from "./loanHold";
import { VersionType } from "./versionType";

export interface LoanHoldSearchPagedSelectFieldsResponse {
    loanHold: LoanHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}