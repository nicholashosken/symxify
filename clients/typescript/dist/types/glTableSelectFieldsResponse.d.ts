import { GlTable } from "./glTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTableSelectFieldsResponse {
    glTable: GlTable;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
