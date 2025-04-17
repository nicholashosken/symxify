import { ShareNoteFields } from "./shareNoteFields";
import { VersionType } from "./versionType";
export interface ShareNoteSingleSelectableFields {
    includeAllShareNoteFields: boolean | null;
    shareNoteFields: ShareNoteFields;
    version1: VersionType;
}
