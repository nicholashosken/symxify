import { SymXClient } from "./symXClient";
import { VersionType } from "./versionType";
export interface SymXClientSelectFieldsResponse {
    symXClient: SymXClient;
    version1: VersionType;
    messageId: string;
}
