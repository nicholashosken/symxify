import { CredRepItemFields } from "./credRepItemFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CredRepItemSelectableFields {
    includeAllCredRepItemFieldsValue: boolean;
    includeAllCredRepItemFieldsValueSpecified: boolean;
    includeAllCredRepItemFields: boolean | null;
    credRepItemFields: CredRepItemFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
