import { CardNote } from "./cardNote";
import { VersionType } from "./versionType";

export interface CardNotePagedListSelectFieldsResponse {
    cardNote: CardNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}