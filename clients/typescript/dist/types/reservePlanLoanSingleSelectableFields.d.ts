import { ReservePlanLoanFields } from "./reservePlanLoanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanLoanSingleSelectableFields {
    includeAllReservePlanLoanFieldsValue: boolean;
    includeAllReservePlanLoanFieldsValueSpecified: boolean;
    includeAllReservePlanLoanFields: boolean | null;
    reservePlanLoanFields: ReservePlanLoanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
