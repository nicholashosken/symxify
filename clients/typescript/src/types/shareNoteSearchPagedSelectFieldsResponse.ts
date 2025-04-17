import { ShareNote } from "./shareNote";
import { VersionType } from "./versionType";

export interface ShareNoteSearchPagedSelectFieldsResponse {
    shareNote: ShareNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}