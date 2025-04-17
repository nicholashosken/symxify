import { CheckFields } from "./checkFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckSingleSelectableFields {
    includeAllCheckFieldsValue: boolean;
    includeAllCheckFieldsValueSpecified: boolean;
    includeAllCheckFields: boolean | null;
    checkFields: CheckFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}