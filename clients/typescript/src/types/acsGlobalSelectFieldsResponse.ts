import { AcsGlobal } from "./acsGlobal";
import { VersionType } from "./versionType";

export interface AcsGlobalSelectFieldsResponse {
    acsGlobal: AcsGlobal;
    version1: VersionType;
    messageId: string;
}