import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";

export interface LoanTransferSelectFieldsResponse {
    loanTransfer: LoanTransfer;
    version1: VersionType;
    messageId: string;
}