import { IntIndexFields } from "./intIndexFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IntIndexSingleSelectableFields {
    includeAllIntIndexFieldsValue: boolean;
    includeAllIntIndexFieldsValueSpecified: boolean;
    includeAllIntIndexFields: boolean | null;
    intIndexFields: IntIndexFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
