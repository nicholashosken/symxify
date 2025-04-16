import { DivIndexLocalFields } from "./divIndexLocalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivIndexLocalSelectableFields {
    includeAllDivIndexLocalFieldsValue: boolean;
    includeAllDivIndexLocalFieldsValueSpecified: boolean;
    includeAllDivIndexLocalFields: boolean | null;
    divIndexLocalFields: DivIndexLocalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}