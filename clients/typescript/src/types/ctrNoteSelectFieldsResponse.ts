import { CtrNote } from "./ctrNote";
import { VersionType } from "./versionType";

export interface CtrNoteSelectFieldsResponse {
    ctrNote: CtrNote;
    version1: VersionType;
    messageId: string;
}