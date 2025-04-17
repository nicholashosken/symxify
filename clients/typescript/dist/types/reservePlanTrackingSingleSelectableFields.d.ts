import { ReservePlanTrackingFields } from "./reservePlanTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanTrackingSingleSelectableFields {
    includeAllReservePlanTrackingFieldsValue: boolean;
    includeAllReservePlanTrackingFieldsValueSpecified: boolean;
    includeAllReservePlanTrackingFields: boolean | null;
    reservePlanTrackingFields: ReservePlanTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
