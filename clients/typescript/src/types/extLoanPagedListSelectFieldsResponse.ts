import { ExtLoan } from "./extLoan";
import { VersionType } from "./versionType";

export interface ExtLoanPagedListSelectFieldsResponse {
    extLoan: ExtLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}