import { ReservePlanTracking } from "./reservePlanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanTrackingPagedListSelectFieldsResponse {
    reservePlanTracking: ReservePlanTracking[];
    reservePlanTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}