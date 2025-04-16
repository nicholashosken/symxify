import { InqDefinitionFields } from "./inqDefinitionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InqDefinitionSingleSelectableFields {
    includeAllInqDefinitionFieldsValue: boolean;
    includeAllInqDefinitionFieldsValueSpecified: boolean;
    includeAllInqDefinitionFields: boolean | null;
    inqDefinitionFields: InqDefinitionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}