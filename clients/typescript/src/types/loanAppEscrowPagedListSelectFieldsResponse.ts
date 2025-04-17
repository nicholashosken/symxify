import { LoanAppEscrow } from "./loanAppEscrow";
import { VersionType } from "./versionType";

export interface LoanAppEscrowPagedListSelectFieldsResponse {
    loanAppEscrow: LoanAppEscrow[];
    token: string;
    version1: VersionType;
    messageId: string;
}