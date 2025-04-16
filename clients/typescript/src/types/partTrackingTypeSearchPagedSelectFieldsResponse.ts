import { PartTrackingType } from "./partTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartTrackingTypeSearchPagedSelectFieldsResponse {
    partTrackingType: PartTrackingType[];
    partTrackingTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}