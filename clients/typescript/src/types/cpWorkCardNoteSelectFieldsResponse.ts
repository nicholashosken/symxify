import { CpWorkCardNote } from "./cpWorkCardNote";
import { VersionType } from "./versionType";

export interface CpWorkCardNoteSelectFieldsResponse {
    cpWorkCardNote: CpWorkCardNote;
    version1: VersionType;
    messageId: string;
}