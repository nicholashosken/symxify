import { LoanEscrow } from "./loanEscrow";
import { VersionType } from "./versionType";

export interface LoanEscrowSelectFieldsResponse {
    loanEscrow: LoanEscrow;
    version1: VersionType;
    messageId: string;
}