import { OnlineFeeFields } from "./onlineFeeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineFeeSelectableFields {
    includeAllOnlineFeeFieldsValue: boolean;
    includeAllOnlineFeeFieldsValueSpecified: boolean;
    includeAllOnlineFeeFields: boolean | null;
    onlineFeeFields: OnlineFeeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
