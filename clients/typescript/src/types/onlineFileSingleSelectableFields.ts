import { OnlineFileFields } from "./onlineFileFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFileSingleSelectableFields {
    includeAllOnlineFileFieldsValue: boolean;
    includeAllOnlineFileFieldsValueSpecified: boolean;
    includeAllOnlineFileFields: boolean | null;
    onlineFileFields: OnlineFileFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}