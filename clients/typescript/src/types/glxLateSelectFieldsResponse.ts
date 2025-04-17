import { GlxLate } from "./glxLate";
import { VersionType } from "./versionType";

export interface GlxLateSelectFieldsResponse {
    glxLate: GlxLate;
    version1: VersionType;
    messageId: string;
}