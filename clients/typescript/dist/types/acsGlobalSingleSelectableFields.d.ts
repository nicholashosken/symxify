import { AcsGlobalFields } from "./acsGlobalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcsGlobalSingleSelectableFields {
    includeAllAcsGlobalFieldsValue: boolean;
    includeAllAcsGlobalFieldsValueSpecified: boolean;
    includeAllAcsGlobalFields: boolean | null;
    acsGlobalFields: AcsGlobalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
