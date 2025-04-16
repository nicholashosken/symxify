import { Param360ViewFields } from "./param360ViewFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Param360ViewSingleSelectableFields {
    includeAllParam360ViewFieldsValue: boolean;
    includeAllParam360ViewFieldsValueSpecified: boolean;
    includeAllParam360ViewFields: boolean | null;
    param360ViewFields: Param360ViewFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
