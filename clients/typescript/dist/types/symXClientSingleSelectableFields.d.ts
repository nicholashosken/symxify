import { SymXClientFields } from "./symXClientFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXClientSingleSelectableFields {
    includeAllSymXClientFieldsValue: boolean;
    includeAllSymXClientFieldsValueSpecified: boolean;
    includeAllSymXClientFields: boolean | null;
    symXClientFields: SymXClientFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
