import { Tracking } from "./tracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TrackingPagedListSelectFieldsResponse {
    tracking: Tracking[];
    trackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}