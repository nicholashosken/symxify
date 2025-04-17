import { SymXInstance } from "./symXInstance";
import { VersionType } from "./versionType";
export interface SymXInstanceSelectFieldsResponse {
    symXInstance: SymXInstance;
    version1: VersionType;
    messageId: string;
}
