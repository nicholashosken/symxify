import { GlCode } from "./glCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlCodeSelectFieldsResponse {
    glCode: GlCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}