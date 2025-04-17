import { CtrFields } from "./ctrFields";
import { CtrAccountSelectableFields } from "./ctrAccountSelectableFields";
import { CtrBranchSelectableFields } from "./ctrBranchSelectableFields";
import { CtrFmHistorySelectableFields } from "./ctrFmHistorySelectableFields";
import { CtrForeignSelectableFields } from "./ctrForeignSelectableFields";
import { CtrNoteSelectableFields } from "./ctrNoteSelectableFields";
import { CtrPersonSelectableFields } from "./ctrPersonSelectableFields";
import { VersionType } from "./versionType";

export interface CtrSelectableFields {
    includeAllCtrFields: boolean | null;
    ctrFields: CtrFields;
    ctrAccountSelectableFields: CtrAccountSelectableFields;
    ctrBranchSelectableFields: CtrBranchSelectableFields;
    ctrFmHistorySelectableFields: CtrFmHistorySelectableFields;
    ctrForeignSelectableFields: CtrForeignSelectableFields;
    ctrNoteSelectableFields: CtrNoteSelectableFields;
    ctrPersonSelectableFields: CtrPersonSelectableFields;
    version1: VersionType;
}