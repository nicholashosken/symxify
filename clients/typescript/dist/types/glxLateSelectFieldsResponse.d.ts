import { GlxLate } from "./glxLate";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlxLateSelectFieldsResponse {
    glxLate: GlxLate;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
