import { ScreenDefinitionFields } from "./screenDefinitionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ScreenDefinitionSingleSelectableFields {
    includeAllScreenDefinitionFieldsValue: boolean;
    includeAllScreenDefinitionFieldsValueSpecified: boolean;
    includeAllScreenDefinitionFields: boolean | null;
    screenDefinitionFields: ScreenDefinitionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}