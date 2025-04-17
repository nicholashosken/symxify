import { LoanTransaction } from "./loanTransaction";
import { VersionType } from "./versionType";
export interface LoanTransactionPagedListSelectFieldsResponse {
    loanTransaction: LoanTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}
