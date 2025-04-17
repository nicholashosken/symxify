import { GlCode } from "./glCode";
import { VersionType } from "./versionType";
export interface GlCodeSearchPagedSelectFieldsResponse {
    glCode: GlCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}
