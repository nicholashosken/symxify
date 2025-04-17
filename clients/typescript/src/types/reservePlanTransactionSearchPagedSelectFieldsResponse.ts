import { ReservePlanTransaction } from "./reservePlanTransaction";
import { VersionType } from "./versionType";

export interface ReservePlanTransactionSearchPagedSelectFieldsResponse {
    reservePlanTransaction: ReservePlanTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}