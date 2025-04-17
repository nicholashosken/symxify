import { CpWorkCardNote } from "./cpWorkCardNote";
import { VersionType } from "./versionType";

export interface CpWorkCardNoteSearchPagedSelectFieldsResponse {
    cpWorkCardNote: CpWorkCardNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}