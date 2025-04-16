import { SymXInstanceFields } from "./symXInstanceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXInstanceSelectableFields {
    includeAllSymXInstanceFieldsValue: boolean;
    includeAllSymXInstanceFieldsValueSpecified: boolean;
    includeAllSymXInstanceFields: boolean | null;
    symXInstanceFields: SymXInstanceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
