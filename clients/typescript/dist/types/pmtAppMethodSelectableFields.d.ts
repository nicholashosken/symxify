import { PmtAppMethodFields } from "./pmtAppMethodFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PmtAppMethodSelectableFields {
    includeAllPmtAppMethodFieldsValue: boolean;
    includeAllPmtAppMethodFieldsValueSpecified: boolean;
    includeAllPmtAppMethodFields: boolean | null;
    pmtAppMethodFields: PmtAppMethodFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
