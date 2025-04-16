import { ShareNote } from "./shareNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareNotePagedListSelectFieldsResponse {
    shareNote: ShareNote[];
    shareNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
