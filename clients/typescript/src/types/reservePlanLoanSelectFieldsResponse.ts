import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";

export interface ReservePlanLoanSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan;
    version1: VersionType;
    messageId: string;
}