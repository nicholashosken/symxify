import { Tracking } from "./tracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingSelectFieldsResponse {
    tracking: Tracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
