import { PartTrackingType } from "./partTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartTrackingTypeSelectFieldsResponse {
    partTrackingType: PartTrackingType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}