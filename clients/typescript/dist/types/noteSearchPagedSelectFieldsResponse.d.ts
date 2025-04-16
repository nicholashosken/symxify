import { Note } from "./note";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NoteSearchPagedSelectFieldsResponse {
    note: Note[];
    noteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
