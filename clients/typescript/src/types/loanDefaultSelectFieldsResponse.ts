import { LoanDefault } from "./loanDefault";
import { VersionType } from "./versionType";

export interface LoanDefaultSelectFieldsResponse {
    loanDefault: LoanDefault;
    version1: VersionType;
    messageId: string;
}