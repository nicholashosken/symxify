import { RegCc } from "./regCc";
import { VersionType } from "./versionType";
export interface RegCcSelectFieldsResponse {
    regCc: RegCc;
    version1: VersionType;
    messageId: string;
}
