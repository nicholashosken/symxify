import { ReservePlanTransactionFields } from "./reservePlanTransactionFields";
import { VersionType } from "./versionType";
export interface ReservePlanTransactionSingleSelectableFields {
    includeAllReservePlanTransactionFields: boolean | null;
    reservePlanTransactionFields: ReservePlanTransactionFields;
    version1: VersionType;
}
