import { CredRepFields } from "./credRepFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CredRepSingleSelectableFields {
    includeAllCredRepFieldsValue: boolean;
    includeAllCredRepFieldsValueSpecified: boolean;
    includeAllCredRepFields: boolean | null;
    credRepFields: CredRepFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
