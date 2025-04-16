import { ShareNote } from "./shareNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareNoteSelectFieldsResponse {
    shareNote: ShareNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}