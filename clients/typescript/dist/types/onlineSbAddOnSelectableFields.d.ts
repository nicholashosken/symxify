import { OnlineSbAddOnFields } from "./onlineSbAddOnFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSbAddOnSelectableFields {
    includeAllOnlineSbAddOnFieldsValue: boolean;
    includeAllOnlineSbAddOnFieldsValueSpecified: boolean;
    includeAllOnlineSbAddOnFields: boolean | null;
    onlineSbAddOnFields: OnlineSbAddOnFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
