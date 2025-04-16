import { AccountFields } from "./accountFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AccountSingleSelectableFields {
    includeAllAccountFieldsValue: boolean;
    includeAllAccountFieldsValueSpecified: boolean;
    includeAllAccountFields: boolean | null;
    accountFields: AccountFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}