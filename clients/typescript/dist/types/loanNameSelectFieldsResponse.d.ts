import { LoanName } from "./loanName";
import { VersionType } from "./versionType";
export interface LoanNameSelectFieldsResponse {
    loanName: LoanName;
    version1: VersionType;
    messageId: string;
}
