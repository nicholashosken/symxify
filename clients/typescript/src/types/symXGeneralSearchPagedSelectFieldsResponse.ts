import { SymXGeneral } from "./symXGeneral";
import { VersionType } from "./versionType";

export interface SymXGeneralSearchPagedSelectFieldsResponse {
    symXGeneral: SymXGeneral[];
    token: string;
    version1: VersionType;
    messageId: string;
}