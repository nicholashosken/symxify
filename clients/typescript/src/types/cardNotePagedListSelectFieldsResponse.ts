import { CardNote } from "./cardNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardNotePagedListSelectFieldsResponse {
    cardNote: CardNote[];
    cardNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}