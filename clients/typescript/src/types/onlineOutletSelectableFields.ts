import { OnlineOutletFields } from "./onlineOutletFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineOutletSelectableFields {
    includeAllOnlineOutletFieldsValue: boolean;
    includeAllOnlineOutletFieldsValueSpecified: boolean;
    includeAllOnlineOutletFields: boolean | null;
    onlineOutletFields: OnlineOutletFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}