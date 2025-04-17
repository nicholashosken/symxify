import { CardNote } from "./cardNote";
import { VersionType } from "./versionType";

export interface CardNoteSelectFieldsResponse {
    cardNote: CardNote;
    version1: VersionType;
    messageId: string;
}