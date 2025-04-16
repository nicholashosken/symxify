import { GlxLate } from "./glxLate";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlxLateSearchPagedSelectFieldsResponse {
    glxLate: GlxLate[];
    glxLateSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}