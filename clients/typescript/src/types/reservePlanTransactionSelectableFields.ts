import { ReservePlanTransactionFields } from "./reservePlanTransactionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanTransactionSelectableFields {
    includeAllReservePlanTransactionFieldsValue: boolean;
    includeAllReservePlanTransactionFieldsValueSpecified: boolean;
    includeAllReservePlanTransactionFields: boolean | null;
    reservePlanTransactionFields: ReservePlanTransactionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}