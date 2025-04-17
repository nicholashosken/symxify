import { ReservePlan } from "./reservePlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanPagedListSelectFieldsResponse {
    reservePlan: ReservePlan[];
    reservePlanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
