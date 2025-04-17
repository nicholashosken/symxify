import { NonAcctNameFields } from "./nonAcctNameFields";
import { NonAcctNameFmHistorySelectableFields } from "./nonAcctNameFmHistorySelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameSelectableFields {
    includeAllNonAcctNameFieldsValue: boolean;
    includeAllNonAcctNameFieldsValueSpecified: boolean;
    includeAllNonAcctNameFields: boolean | null;
    nonAcctNameFields: NonAcctNameFields;
    nonAcctNameFmHistorySelectableFields: NonAcctNameFmHistorySelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}