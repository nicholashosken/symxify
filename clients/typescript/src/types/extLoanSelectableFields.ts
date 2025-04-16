import { ExtLoanFields } from "./extLoanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExtLoanSelectableFields {
    includeAllExtLoanFieldsValue: boolean;
    includeAllExtLoanFieldsValueSpecified: boolean;
    includeAllExtLoanFields: boolean | null;
    extLoanFields: ExtLoanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}