import { CardNote } from "./cardNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardNoteSelectFieldsResponse {
    cardNote: CardNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}