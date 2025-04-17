import { LoanName } from "./loanName";
import { VersionType } from "./versionType";

export interface LoanNameSearchPagedSelectFieldsResponse {
    loanName: LoanName[];
    token: string;
    version1: VersionType;
    messageId: string;
}