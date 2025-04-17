import { LoanCheckOrder } from "./loanCheckOrder";
import { VersionType } from "./versionType";
export interface LoanCheckOrderSelectFieldsResponse {
    loanCheckOrder: LoanCheckOrder;
    version1: VersionType;
    messageId: string;
}
