import { ReservePlanTransactionFields } from "./reservePlanTransactionFields";
import { VersionType } from "./versionType";
export interface ReservePlanTransactionSelectableFields {
    includeAllReservePlanTransactionFields: boolean | null;
    reservePlanTransactionFields: ReservePlanTransactionFields;
    version1: VersionType;
}
