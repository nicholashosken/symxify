import { LoanName } from "./loanName";
import { VersionType } from "./versionType";
export interface LoanNamePagedListSelectFieldsResponse {
    loanName: LoanName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
