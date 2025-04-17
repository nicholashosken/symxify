import { CtrFields } from "./ctrFields";
import { CtrAccountSelectableFields } from "./ctrAccountSelectableFields";
import { CtrBranchSelectableFields } from "./ctrBranchSelectableFields";
import { CtrFmHistorySelectableFields } from "./ctrFmHistorySelectableFields";
import { CtrForeignSelectableFields } from "./ctrForeignSelectableFields";
import { CtrNoteSelectableFields } from "./ctrNoteSelectableFields";
import { CtrPersonSelectableFields } from "./ctrPersonSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrSelectableFields {
    includeAllCtrFieldsValue: boolean;
    includeAllCtrFieldsValueSpecified: boolean;
    includeAllCtrFields: boolean | null;
    ctrFields: CtrFields;
    ctrAccountSelectableFields: CtrAccountSelectableFields;
    ctrBranchSelectableFields: CtrBranchSelectableFields;
    ctrFmHistorySelectableFields: CtrFmHistorySelectableFields;
    ctrForeignSelectableFields: CtrForeignSelectableFields;
    ctrNoteSelectableFields: CtrNoteSelectableFields;
    ctrPersonSelectableFields: CtrPersonSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
