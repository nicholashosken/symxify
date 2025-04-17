import { GlHistory } from "./glHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlHistorySearchPagedSelectFieldsResponse {
    glHistory: GlHistory[];
    glHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}