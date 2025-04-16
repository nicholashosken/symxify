import { SycGeneralFields } from "./sycGeneralFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SycGeneralSingleSelectableFields {
    includeAllSycGeneralFieldsValue: boolean;
    includeAllSycGeneralFieldsValueSpecified: boolean;
    includeAllSycGeneralFields: boolean | null;
    sycGeneralFields: SycGeneralFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}