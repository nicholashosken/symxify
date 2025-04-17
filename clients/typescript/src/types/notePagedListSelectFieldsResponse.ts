import { Note } from "./note";
import { VersionType } from "./versionType";

export interface NotePagedListSelectFieldsResponse {
    note: Note[];
    token: string;
    version1: VersionType;
    messageId: string;
}