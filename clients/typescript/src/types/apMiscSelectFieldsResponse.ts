import { ApMisc } from "./apMisc";
import { VersionType } from "./versionType";

export interface ApMiscSelectFieldsResponse {
    apMisc: ApMisc;
    version1: VersionType;
    messageId: string;
}