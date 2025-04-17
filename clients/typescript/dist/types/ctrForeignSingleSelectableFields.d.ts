import { CtrForeignFields } from "./ctrForeignFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrForeignSingleSelectableFields {
    includeAllCtrForeignFieldsValue: boolean;
    includeAllCtrForeignFieldsValueSpecified: boolean;
    includeAllCtrForeignFields: boolean | null;
    ctrForeignFields: CtrForeignFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
