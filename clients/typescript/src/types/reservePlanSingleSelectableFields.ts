import { ReservePlanFields } from "./reservePlanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanSingleSelectableFields {
    includeAllReservePlanFieldsValue: boolean;
    includeAllReservePlanFieldsValueSpecified: boolean;
    includeAllReservePlanFields: boolean | null;
    reservePlanFields: ReservePlanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}