import { LoanAppEscrow } from "./loanAppEscrow";
import { VersionType } from "./versionType";
export interface LoanAppEscrowSelectFieldsResponse {
    loanAppEscrow: LoanAppEscrow;
    version1: VersionType;
    messageId: string;
}
