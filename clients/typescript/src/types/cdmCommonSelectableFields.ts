import { CdmCommonFields } from "./cdmCommonFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CdmCommonSelectableFields {
    includeAllCdmCommonFieldsValue: boolean;
    includeAllCdmCommonFieldsValueSpecified: boolean;
    includeAllCdmCommonFields: boolean | null;
    cdmCommonFields: CdmCommonFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}