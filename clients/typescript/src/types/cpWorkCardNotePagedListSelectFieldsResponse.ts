import { CpWorkCardNote } from "./cpWorkCardNote";
import { VersionType } from "./versionType";

export interface CpWorkCardNotePagedListSelectFieldsResponse {
    cpWorkCardNote: CpWorkCardNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}