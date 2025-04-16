import { GlTable } from "./glTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTableSearchPagedSelectFieldsResponse {
    glTable: GlTable[];
    glTableSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
