import { ShareDefaultFields } from "./shareDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareDefaultSingleSelectableFields {
    includeAllShareDefaultFieldsValue: boolean;
    includeAllShareDefaultFieldsValueSpecified: boolean;
    includeAllShareDefaultFields: boolean | null;
    shareDefaultFields: ShareDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}