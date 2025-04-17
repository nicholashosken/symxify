import { NoteFields } from "./noteFields";
import { VersionType } from "./versionType";

export interface NoteSelectableFields {
    includeAllNoteFields: boolean | null;
    noteFields: NoteFields;
    version1: VersionType;
}