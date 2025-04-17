import { CtrPersonCtrTranInfoFields } from "./ctrPersonCtrTranInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonCtrTranInfoSingleSelectableFields {
    includeAllCtrPersonCtrTranInfoFieldsValue: boolean;
    includeAllCtrPersonCtrTranInfoFieldsValueSpecified: boolean;
    includeAllCtrPersonCtrTranInfoFields: boolean | null;
    ctrPersonCtrTranInfoFields: CtrPersonCtrTranInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}