import { ReservePlanFields } from "./reservePlanFields";
import { ReservePlanLoanSelectableFields } from "./reservePlanLoanSelectableFields";
import { ReservePlanTrackingSelectableFields } from "./reservePlanTrackingSelectableFields";
import { ReservePlanTransactionSelectableFields } from "./reservePlanTransactionSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanSelectableFields {
    includeAllReservePlanFieldsValue: boolean;
    includeAllReservePlanFieldsValueSpecified: boolean;
    includeAllReservePlanFields: boolean | null;
    reservePlanFields: ReservePlanFields;
    reservePlanLoanSelectableFields: ReservePlanLoanSelectableFields;
    reservePlanTrackingSelectableFields: ReservePlanTrackingSelectableFields;
    reservePlanTransactionSelectableFields: ReservePlanTransactionSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}