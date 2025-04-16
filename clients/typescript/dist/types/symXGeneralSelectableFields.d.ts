import { SymXGeneralFields } from "./symXGeneralFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXGeneralSelectableFields {
    includeAllSymXGeneralFieldsValue: boolean;
    includeAllSymXGeneralFieldsValueSpecified: boolean;
    includeAllSymXGeneralFields: boolean | null;
    symXGeneralFields: SymXGeneralFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
