import { ShareNote } from "./shareNote";
import { VersionType } from "./versionType";

export interface ShareNotePagedListSelectFieldsResponse {
    shareNote: ShareNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}