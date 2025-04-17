import { ReservePlan } from "./reservePlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanSelectFieldsResponse {
    reservePlan: ReservePlan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}