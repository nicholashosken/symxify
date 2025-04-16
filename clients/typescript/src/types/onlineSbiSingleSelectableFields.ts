import { OnlineSbiFields } from "./onlineSbiFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbiSingleSelectableFields {
    includeAllOnlineSbiFieldsValue: boolean;
    includeAllOnlineSbiFieldsValueSpecified: boolean;
    includeAllOnlineSbiFields: boolean | null;
    onlineSbiFields: OnlineSbiFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}