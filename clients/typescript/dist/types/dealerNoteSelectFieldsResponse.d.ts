import { DealerNote } from "./dealerNote";
import { VersionType } from "./versionType";
export interface DealerNoteSelectFieldsResponse {
    dealerNote: DealerNote;
    version1: VersionType;
    messageId: string;
}
