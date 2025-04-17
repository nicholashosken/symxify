import { GlHistory } from "./glHistory";
import { VersionType } from "./versionType";
export interface GlHistorySearchPagedSelectFieldsResponse {
    glHistory: GlHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
