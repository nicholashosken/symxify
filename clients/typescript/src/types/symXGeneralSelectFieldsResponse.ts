import { SymXGeneral } from "./symXGeneral";
import { VersionType } from "./versionType";

export interface SymXGeneralSelectFieldsResponse {
    symXGeneral: SymXGeneral;
    version1: VersionType;
    messageId: string;
}