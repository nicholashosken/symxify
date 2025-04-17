import { GlHistory } from "./glHistory";
import { VersionType } from "./versionType";
export interface GlHistoryPagedListSelectFieldsResponse {
    glHistory: GlHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
