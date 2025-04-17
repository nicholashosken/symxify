import { NonAcctNameFmHistoryFields } from "./nonAcctNameFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameFmHistorySelectableFields {
    includeAllNonAcctNameFmHistoryFieldsValue: boolean;
    includeAllNonAcctNameFmHistoryFieldsValueSpecified: boolean;
    includeAllNonAcctNameFmHistoryFields: boolean | null;
    nonAcctNameFmHistoryFields: NonAcctNameFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}