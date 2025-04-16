import { InqDefinitionFields } from "./inqDefinitionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InqDefinitionSelectableFields {
    includeAllInqDefinitionFieldsValue: boolean;
    includeAllInqDefinitionFieldsValueSpecified: boolean;
    includeAllInqDefinitionFields: boolean | null;
    inqDefinitionFields: InqDefinitionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
