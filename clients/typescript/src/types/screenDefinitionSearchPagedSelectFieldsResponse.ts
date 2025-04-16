import { ScreenDefinition } from "./screenDefinition";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ScreenDefinitionSearchPagedSelectFieldsResponse {
    screenDefinition: ScreenDefinition[];
    screenDefinitionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}