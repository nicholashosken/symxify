import { CheckFields } from "./checkFields";
import { CheckFmHistorySelectableFields } from "./checkFmHistorySelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckSelectableFields {
    includeAllCheckFieldsValue: boolean;
    includeAllCheckFieldsValueSpecified: boolean;
    includeAllCheckFields: boolean | null;
    checkFields: CheckFields;
    checkFmHistorySelectableFields: CheckFmHistorySelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}