import { CtrNoteFields } from "./ctrNoteFields";
import { VersionType } from "./versionType";
export interface CtrNoteSingleSelectableFields {
    includeAllCtrNoteFields: boolean | null;
    ctrNoteFields: CtrNoteFields;
    version1: VersionType;
}
