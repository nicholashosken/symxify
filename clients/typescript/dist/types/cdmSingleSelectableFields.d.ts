import { CdmFields } from "./cdmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CdmSingleSelectableFields {
    includeAllCdmFieldsValue: boolean;
    includeAllCdmFieldsValueSpecified: boolean;
    includeAllCdmFields: boolean | null;
    cdmFields: CdmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
