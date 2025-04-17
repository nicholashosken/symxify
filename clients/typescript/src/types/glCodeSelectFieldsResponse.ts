import { GlCode } from "./glCode";
import { VersionType } from "./versionType";

export interface GlCodeSelectFieldsResponse {
    glCode: GlCode;
    version1: VersionType;
    messageId: string;
}