import { LoanAppDefault } from "./loanAppDefault";
import { VersionType } from "./versionType";
export interface LoanAppDefaultSearchPagedSelectFieldsResponse {
    loanAppDefault: LoanAppDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
