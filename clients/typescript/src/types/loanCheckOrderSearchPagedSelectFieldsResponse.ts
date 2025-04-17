import { LoanCheckOrder } from "./loanCheckOrder";
import { VersionType } from "./versionType";

export interface LoanCheckOrderSearchPagedSelectFieldsResponse {
    loanCheckOrder: LoanCheckOrder[];
    token: string;
    version1: VersionType;
    messageId: string;
}