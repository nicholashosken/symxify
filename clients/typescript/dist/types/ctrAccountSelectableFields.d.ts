import { CtrAccountFields } from "./ctrAccountFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrAccountSelectableFields {
    includeAllCtrAccountFieldsValue: boolean;
    includeAllCtrAccountFieldsValueSpecified: boolean;
    includeAllCtrAccountFields: boolean | null;
    ctrAccountFields: CtrAccountFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
