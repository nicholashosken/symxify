import { LoanEscrow } from "./loanEscrow";
import { VersionType } from "./versionType";

export interface LoanEscrowPagedListSelectFieldsResponse {
    loanEscrow: LoanEscrow[];
    token: string;
    version1: VersionType;
    messageId: string;
}