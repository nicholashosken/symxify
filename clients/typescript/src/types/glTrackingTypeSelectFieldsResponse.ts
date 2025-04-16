import { GlTrackingType } from "./glTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlTrackingTypeSelectFieldsResponse {
    glTrackingType: GlTrackingType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}