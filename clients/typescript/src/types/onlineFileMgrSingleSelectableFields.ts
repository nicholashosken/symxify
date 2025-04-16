import { OnlineFileMgrFields } from "./onlineFileMgrFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFileMgrSingleSelectableFields {
    includeAllOnlineFileMgrFieldsValue: boolean;
    includeAllOnlineFileMgrFieldsValueSpecified: boolean;
    includeAllOnlineFileMgrFields: boolean | null;
    onlineFileMgrFields: OnlineFileMgrFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}