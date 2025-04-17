import { CtrPersonFields } from "./ctrPersonFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonSingleSelectableFields {
    includeAllCtrPersonFieldsValue: boolean;
    includeAllCtrPersonFieldsValueSpecified: boolean;
    includeAllCtrPersonFields: boolean | null;
    ctrPersonFields: CtrPersonFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}