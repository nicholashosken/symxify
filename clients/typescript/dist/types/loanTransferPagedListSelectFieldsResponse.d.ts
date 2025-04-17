import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";
export interface LoanTransferPagedListSelectFieldsResponse {
    loanTransfer: LoanTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}
