import { CtrNoteFields } from "./ctrNoteFields";
import { VersionType } from "./versionType";
export interface CtrNoteSelectableFields {
    includeAllCtrNoteFields: boolean | null;
    ctrNoteFields: CtrNoteFields;
    version1: VersionType;
}
