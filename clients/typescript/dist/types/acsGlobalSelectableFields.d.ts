import { AcsGlobalFields } from "./acsGlobalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcsGlobalSelectableFields {
    includeAllAcsGlobalFieldsValue: boolean;
    includeAllAcsGlobalFieldsValueSpecified: boolean;
    includeAllAcsGlobalFields: boolean | null;
    acsGlobalFields: AcsGlobalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
