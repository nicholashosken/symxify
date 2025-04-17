import { LoanDefault } from "./loanDefault";
import { VersionType } from "./versionType";
export interface LoanDefaultPagedListSelectFieldsResponse {
    loanDefault: LoanDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
