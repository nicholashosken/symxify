import { NonRegCcFields } from "./nonRegCcFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NonRegCcSelectableFields {
    includeAllNonRegCcFieldsValue: boolean;
    includeAllNonRegCcFieldsValueSpecified: boolean;
    includeAllNonRegCcFields: boolean | null;
    nonRegCcFields: NonRegCcFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
