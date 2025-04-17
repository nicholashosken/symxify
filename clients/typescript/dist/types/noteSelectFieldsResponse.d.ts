import { Note } from "./note";
import { VersionType } from "./versionType";
export interface NoteSelectFieldsResponse {
    note: Note;
    version1: VersionType;
    messageId: string;
}
