import { DocTypeDefault } from "./docTypeDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocTypeDefaultPagedListSelectFieldsResponse {
    docTypeDefault: DocTypeDefault[];
    docTypeDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
