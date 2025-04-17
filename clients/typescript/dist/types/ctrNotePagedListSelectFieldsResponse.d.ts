import { CtrNote } from "./ctrNote";
import { VersionType } from "./versionType";
export interface CtrNotePagedListSelectFieldsResponse {
    ctrNote: CtrNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}
