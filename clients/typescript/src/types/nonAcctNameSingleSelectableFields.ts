import { NonAcctNameFields } from "./nonAcctNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameSingleSelectableFields {
    includeAllNonAcctNameFieldsValue: boolean;
    includeAllNonAcctNameFieldsValueSpecified: boolean;
    includeAllNonAcctNameFields: boolean | null;
    nonAcctNameFields: NonAcctNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}