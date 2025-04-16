import { NoteFields } from "./noteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NoteSelectableFields {
    includeAllNoteFieldsValue: boolean;
    includeAllNoteFieldsValueSpecified: boolean;
    includeAllNoteFields: boolean | null;
    noteFields: NoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}