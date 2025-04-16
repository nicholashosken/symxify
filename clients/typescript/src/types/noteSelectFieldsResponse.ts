import { Note } from "./note";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NoteSelectFieldsResponse {
    note: Note;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}