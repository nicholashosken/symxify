import { Ncua5300Fields } from "./ncua5300Fields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Ncua5300SingleSelectableFields {
    includeAllNcua5300FieldsValue: boolean;
    includeAllNcua5300FieldsValueSpecified: boolean;
    includeAllNcua5300Fields: boolean | null;
    ncua5300Fields: Ncua5300Fields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
