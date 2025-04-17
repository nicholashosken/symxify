import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";

export interface ReservePlanLoanPagedListSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}