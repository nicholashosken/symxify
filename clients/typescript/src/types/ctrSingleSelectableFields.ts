import { CtrFields } from "./ctrFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrSingleSelectableFields {
    includeAllCtrFieldsValue: boolean;
    includeAllCtrFieldsValueSpecified: boolean;
    includeAllCtrFields: boolean | null;
    ctrFields: CtrFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}