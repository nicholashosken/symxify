import { ScreenDefinition } from "./screenDefinition";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ScreenDefinitionSelectFieldsResponse {
    screenDefinition: ScreenDefinition;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}