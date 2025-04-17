import { GlxLate } from "./glxLate";
import { VersionType } from "./versionType";
export interface GlxLateSearchPagedSelectFieldsResponse {
    glxLate: GlxLate[];
    token: string;
    version1: VersionType;
    messageId: string;
}
