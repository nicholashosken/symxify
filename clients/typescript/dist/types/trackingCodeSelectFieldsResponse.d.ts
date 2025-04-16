import { TrackingCode } from "./trackingCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingCodeSelectFieldsResponse {
    trackingCode: TrackingCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
