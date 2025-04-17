import { DealerNote } from "./dealerNote";
import { VersionType } from "./versionType";

export interface DealerNotePagedListSelectFieldsResponse {
    dealerNote: DealerNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}