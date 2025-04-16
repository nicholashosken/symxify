import { DocTypeDefault } from "./docTypeDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocTypeDefaultSelectFieldsResponse {
    docTypeDefault: DocTypeDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}