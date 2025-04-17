import { LoanTypeIdRange } from "./loanTypeIdRange";
import { VersionType } from "./versionType";
export interface LoanTypeIdRangePagedListSelectFieldsResponse {
    loanTypeIdRange: LoanTypeIdRange[];
    token: string;
    version1: VersionType;
    messageId: string;
}
