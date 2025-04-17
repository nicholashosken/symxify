import { LoanAppEscrow } from "./loanAppEscrow";
import { VersionType } from "./versionType";

export interface LoanAppEscrowSearchPagedSelectFieldsResponse {
    loanAppEscrow: LoanAppEscrow[];
    token: string;
    version1: VersionType;
    messageId: string;
}