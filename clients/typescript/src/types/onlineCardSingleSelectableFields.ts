import { OnlineCardFields } from "./onlineCardFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineCardSingleSelectableFields {
    includeAllOnlineCardFieldsValue: boolean;
    includeAllOnlineCardFieldsValueSpecified: boolean;
    includeAllOnlineCardFields: boolean | null;
    onlineCardFields: OnlineCardFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}