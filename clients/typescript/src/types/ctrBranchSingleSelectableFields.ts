import { CtrBranchFields } from "./ctrBranchFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrBranchSingleSelectableFields {
    includeAllCtrBranchFieldsValue: boolean;
    includeAllCtrBranchFieldsValueSpecified: boolean;
    includeAllCtrBranchFields: boolean | null;
    ctrBranchFields: CtrBranchFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}