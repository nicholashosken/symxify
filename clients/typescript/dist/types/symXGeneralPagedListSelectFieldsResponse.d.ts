import { SymXGeneral } from "./symXGeneral";
import { VersionType } from "./versionType";
export interface SymXGeneralPagedListSelectFieldsResponse {
    symXGeneral: SymXGeneral[];
    token: string;
    version1: VersionType;
    messageId: string;
}
