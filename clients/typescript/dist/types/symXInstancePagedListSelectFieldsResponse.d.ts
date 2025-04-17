import { SymXInstance } from "./symXInstance";
import { VersionType } from "./versionType";
export interface SymXInstancePagedListSelectFieldsResponse {
    symXInstance: SymXInstance[];
    token: string;
    version1: VersionType;
    messageId: string;
}
