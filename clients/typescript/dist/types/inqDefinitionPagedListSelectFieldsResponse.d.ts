import { InqDefinition } from "./inqDefinition";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InqDefinitionPagedListSelectFieldsResponse {
    inqDefinition: InqDefinition[];
    inqDefinitionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
