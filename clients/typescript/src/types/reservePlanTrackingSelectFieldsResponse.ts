import { ReservePlanTracking } from "./reservePlanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanTrackingSelectFieldsResponse {
    reservePlanTracking: ReservePlanTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}