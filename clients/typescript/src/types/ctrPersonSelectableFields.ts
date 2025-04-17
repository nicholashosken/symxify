import { CtrPersonFields } from "./ctrPersonFields";
import { CtrPersonCtrTranInfoSelectableFields } from "./ctrPersonCtrTranInfoSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonSelectableFields {
    includeAllCtrPersonFieldsValue: boolean;
    includeAllCtrPersonFieldsValueSpecified: boolean;
    includeAllCtrPersonFields: boolean | null;
    ctrPersonFields: CtrPersonFields;
    ctrPersonCtrTranInfoSelectableFields: CtrPersonCtrTranInfoSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}