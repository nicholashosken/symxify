import { ShareCheckOrderFields } from "./shareCheckOrderFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareCheckOrderSingleSelectableFields {
    includeAllShareCheckOrderFieldsValue: boolean;
    includeAllShareCheckOrderFieldsValueSpecified: boolean;
    includeAllShareCheckOrderFields: boolean | null;
    shareCheckOrderFields: ShareCheckOrderFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
