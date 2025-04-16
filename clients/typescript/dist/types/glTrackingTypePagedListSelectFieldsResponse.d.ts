import { GlTrackingType } from "./glTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTrackingTypePagedListSelectFieldsResponse {
    glTrackingType: GlTrackingType[];
    glTrackingTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
