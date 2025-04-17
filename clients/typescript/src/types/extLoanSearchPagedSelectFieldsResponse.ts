import { ExtLoan } from "./extLoan";
import { VersionType } from "./versionType";

export interface ExtLoanSearchPagedSelectFieldsResponse {
    extLoan: ExtLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}