import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";
export interface ReservePlanLoanSearchPagedSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}
