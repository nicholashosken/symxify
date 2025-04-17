import { ReservePlanTransaction } from "./reservePlanTransaction";
import { VersionType } from "./versionType";

export interface ReservePlanTransactionPagedListSelectFieldsResponse {
    reservePlanTransaction: ReservePlanTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}