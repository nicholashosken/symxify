import { CrsFields } from "./crsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CrsSingleSelectableFields {
    includeAllCrsFieldsValue: boolean;
    includeAllCrsFieldsValueSpecified: boolean;
    includeAllCrsFields: boolean | null;
    crsFields: CrsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
