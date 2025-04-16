import { OnlineSbaFields } from "./onlineSbaFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbaSingleSelectableFields {
    includeAllOnlineSbaFieldsValue: boolean;
    includeAllOnlineSbaFieldsValueSpecified: boolean;
    includeAllOnlineSbaFields: boolean | null;
    onlineSbaFields: OnlineSbaFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}