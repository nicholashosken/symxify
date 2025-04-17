import { CtrNote } from "./ctrNote";
import { VersionType } from "./versionType";
export interface CtrNoteSearchPagedSelectFieldsResponse {
    ctrNote: CtrNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}
