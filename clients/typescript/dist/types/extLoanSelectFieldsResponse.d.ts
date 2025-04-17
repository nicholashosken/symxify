import { ExtLoan } from "./extLoan";
import { VersionType } from "./versionType";
export interface ExtLoanSelectFieldsResponse {
    extLoan: ExtLoan;
    version1: VersionType;
    messageId: string;
}
