import { LoanEscrow } from "./loanEscrow";
import { VersionType } from "./versionType";

export interface LoanEscrowSearchPagedSelectFieldsResponse {
    loanEscrow: LoanEscrow[];
    token: string;
    version1: VersionType;
    messageId: string;
}