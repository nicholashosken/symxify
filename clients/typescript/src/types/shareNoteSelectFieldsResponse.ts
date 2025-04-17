import { ShareNote } from "./shareNote";
import { VersionType } from "./versionType";

export interface ShareNoteSelectFieldsResponse {
    shareNote: ShareNote;
    version1: VersionType;
    messageId: string;
}