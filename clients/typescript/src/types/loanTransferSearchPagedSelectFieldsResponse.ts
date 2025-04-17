import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";

export interface LoanTransferSearchPagedSelectFieldsResponse {
    loanTransfer: LoanTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}