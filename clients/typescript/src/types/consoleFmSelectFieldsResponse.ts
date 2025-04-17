import { ConsoleFm } from "./consoleFm";
import { VersionType } from "./versionType";

export interface ConsoleFmSelectFieldsResponse {
    consoleFm: ConsoleFm;
    version1: VersionType;
    messageId: string;
}