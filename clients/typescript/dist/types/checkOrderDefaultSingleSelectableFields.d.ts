import { CheckOrderDefaultFields } from "./checkOrderDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckOrderDefaultSingleSelectableFields {
    includeAllCheckOrderDefaultFieldsValue: boolean;
    includeAllCheckOrderDefaultFieldsValueSpecified: boolean;
    includeAllCheckOrderDefaultFields: boolean | null;
    checkOrderDefaultFields: CheckOrderDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
