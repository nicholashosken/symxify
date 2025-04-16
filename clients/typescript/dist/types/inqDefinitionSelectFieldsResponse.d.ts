import { InqDefinition } from "./inqDefinition";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InqDefinitionSelectFieldsResponse {
    inqDefinition: InqDefinition;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
