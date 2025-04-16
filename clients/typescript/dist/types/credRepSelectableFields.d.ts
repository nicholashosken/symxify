import { CredRepFields } from "./credRepFields";
import { CredRepItemSelectableFields } from "./credRepItemSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CredRepSelectableFields {
    includeAllCredRepFieldsValue: boolean;
    includeAllCredRepFieldsValueSpecified: boolean;
    includeAllCredRepFields: boolean | null;
    credRepFields: CredRepFields;
    credRepItemSelectableFields: CredRepItemSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
