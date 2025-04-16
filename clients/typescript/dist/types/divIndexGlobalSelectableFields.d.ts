import { DivIndexGlobalFields } from "./divIndexGlobalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DivIndexGlobalSelectableFields {
    includeAllDivIndexGlobalFieldsValue: boolean;
    includeAllDivIndexGlobalFieldsValueSpecified: boolean;
    includeAllDivIndexGlobalFields: boolean | null;
    divIndexGlobalFields: DivIndexGlobalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
