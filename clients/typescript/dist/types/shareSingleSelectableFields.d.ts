import { ShareFields } from "./shareFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareSingleSelectableFields {
    includeAllShareFieldsValue: boolean;
    includeAllShareFieldsValueSpecified: boolean;
    includeAllShareFields: boolean | null;
    shareFields: ShareFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
