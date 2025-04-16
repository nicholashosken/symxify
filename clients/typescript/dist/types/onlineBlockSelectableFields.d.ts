import { OnlineBlockFields } from "./onlineBlockFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineBlockSelectableFields {
    includeAllOnlineBlockFieldsValue: boolean;
    includeAllOnlineBlockFieldsValueSpecified: boolean;
    includeAllOnlineBlockFields: boolean | null;
    onlineBlockFields: OnlineBlockFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
