import { InqDefinition } from "./inqDefinition";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InqDefinitionSearchPagedSelectFieldsResponse {
    inqDefinition: InqDefinition[];
    inqDefinitionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}