import { GlxLate } from "./glxLate";
import { VersionType } from "./versionType";

export interface GlxLatePagedListSelectFieldsResponse {
    glxLate: GlxLate[];
    token: string;
    version1: VersionType;
    messageId: string;
}