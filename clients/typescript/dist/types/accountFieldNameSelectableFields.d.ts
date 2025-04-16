import { AccountFieldNameFields } from "./accountFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AccountFieldNameSelectableFields {
    includeAllAccountFieldNameFieldsValue: boolean;
    includeAllAccountFieldNameFieldsValueSpecified: boolean;
    includeAllAccountFieldNameFields: boolean | null;
    accountFieldNameFields: AccountFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
